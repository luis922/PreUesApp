import jwt from "jsonwebtoken";
import { db } from "../db.connection";
import * as fs from "node:fs";
import path from "path";

export const createToken = (idu: number, nameu: string) => {
  return jwt.sign(
    { id: idu, name: nameu },
    process.env.TOKEN_SECRET || "tokensreplacementincaseTOKEN_SECRETisundifined"
  ); //{expiresin: "1h"} para que el token expire en 1 hora
};

export function getIdfromToken(token: string) {
  token = token.split(" ")[1]; // quita el bearer al token
  const payload = jwt.verify(token, process.env.TOKEN_SECRET || "tokensreplacementincaseisundifined");

  return (<any>payload).id;
}

export function getRandomQuestionsIndex(numero: number, questionsLenght: number) {
  //obtiene un numero de indices seleccionados de manera aleatoria y sin repetición para elegir preguntas
  let randomIndex = Math.floor(Math.random() * questionsLenght); //
  let indexArray: number[] = [];
  let index = 0;
  if (numero > questionsLenght) {
    console.log("Se esta solictando mas preguntas de las que existen");
    return indexArray;
  }

  while (index < numero) {
    if (!indexArray.includes(randomIndex)) {
      //si el indice rambom no se encuentra en el array
      indexArray.push(randomIndex); //se agrega al array
      index++;
    }
    randomIndex = Math.floor(Math.random() * questionsLenght); //selecciona un nuevo indice
  }
  return indexArray;
}

export function getRandomQuestions(numero: number, questions: Array<any>) {
  //obtiene un numero defindo por la variable "numero" de preguntas seleccionadas de manera aleatoria y sin repetición
  let indexArray: number[] = getRandomQuestionsIndex(numero, questions.length);
  let selectedQuestions: any[] = [];
  for (let index = 0; index < indexArray.length; index++) {
    selectedQuestions.push(questions[indexArray[index]]);
  }
  return selectedQuestions;
}

export async function countCorrectQuestions(essayId: number) {
  //Cuenta las preguntas correctas de un ensayo
  try {
    const respuestas = await db.chosen_answer.findMany({
      where: { essayToDoId: essayId },
      select: {
        answerId: true,
        answer: {
          select: {
            isCorrect: true,
          },
        },
      },
    });
    let isAnswerCorrect;
    let correctAnsers = 0;
    for (let i = 0; i < respuestas.length; i++) {
      isAnswerCorrect = respuestas[i].answer.isCorrect;
      if (isAnswerCorrect == 1) correctAnsers++;
    }

    return correctAnsers;
  } catch (err) {
    console.log("No se pudo contar las respuestas correctas");
    return -1;
  }
}

export function getFormatedTime(timeInSeconds: number) {
  //Le da formato hh:mm:ss al tiempo recibido en segundos
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60);
  const seconds = Math.floor(((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60 - minutes) * 60);

  let hora = hours.toString();
  let minutos = minutes.toString();
  let segundos = seconds.toString();

  if (hours < 10) hora = "0" + hora;
  if (minutes < 10) minutos = "0" + minutos;
  if (seconds < 10) segundos = "0" + segundos;

  /* if (hours == 0 && minutes == 0) return segundos + "s";
  if (hours == 0) return minutos + ":" + segundos; */
  return hora + ":" + minutos + ":" + segundos;
}

export async function formatSubmittedEssay(submittedEssay: any) {
  //Ordena información obteneida de la BD para mandarla al frontend
  type answer = {
    id: number;
    label: string;
    isCorrect: number;
  };

  type question = {
    id: number;
    subject: string;
    question: string;
    videoLink: string;
    answers: answer[];
  };

  type essay = {
    id: number;
    name: string;
    selectedTime: string;
    totalTime: string;
    numberOfQuestions: number;
    createdAt: string;
    score: number;
    isCustom: number;
    numCorrectAnswers: number;
    coins: number;
    questions: question[];
    chosenAnswers: answer[];
  };

  let numCorrectAnswers = await countCorrectQuestions(submittedEssay.id);
  let ensayo: essay = {
    id: submittedEssay.id,
    name: submittedEssay.name,
    selectedTime: getFormatedTime(submittedEssay.selectedTime * 60),
    totalTime: getFormatedTime(submittedEssay.totalTime),
    numberOfQuestions: submittedEssay.numberOfQuestions,
    createdAt: getFormatedDate(submittedEssay.createdAt),
    score: submittedEssay.score,
    isCustom: submittedEssay.isCustom,
    numCorrectAnswers: numCorrectAnswers,
    coins: submittedEssay.isCustom == 1 ? 2 : numCorrectAnswers,
    questions: [],
    chosenAnswers: [],
  };
  //agrega las preguntas y sus alternativas al arreglo questions
  for (let i = 0; i < submittedEssay.questions.length; i++) {
    ensayo.questions?.push(submittedEssay.questions[i].selectedQuestion);
  }
  //agrega las respuespuestas escogidas al arreglo chosenAnswers
  for (let i = 0; i < submittedEssay.chosenAnswers.length; i++) {
    ensayo.chosenAnswers?.push(submittedEssay.chosenAnswers[i].answer);
  }
  return ensayo;
}

export function formatCustomEssay(customEssay: any) {
  //Ordena información obteneida de la BD para mandarla al frontend
  type answer = {
    id: number;
    label: string;
    isCorrect: number;
  };

  type question = {
    id: number;
    subject: string;
    question: string;
    videoLink: string;
    answers: answer[];
  };

  type essay = {
    id: number;
    name: string;
    selectedTime: number;
    numberOfQuestions: number;
    lastRecordedName: string | null;
    isCustom: number;
    questions: question[];
  };

  let ensayo: essay = {
    id: customEssay.id,
    name: customEssay.name,
    selectedTime: customEssay.selectedTime,
    numberOfQuestions: customEssay.numberOfQuestions,
    lastRecordedName: customEssay.lastRecordedName,
    isCustom: customEssay.isCustom,
    questions: [],
  };

  //agrega las preguntas y sus alternativas al arreglo questions
  for (let i = 0; i < customEssay.questions.length; i++) {
    ensayo.questions?.push(customEssay.questions[i].selectedQuestion);
  }

  return ensayo;
}

export function validateEssayName(essayName: string, reservedChars: Array<string>) {
  //valida que el nombre no contenga los caracteres "(",")"
  for (var character of reservedChars) {
    let isInName = essayName.includes(character);
    if (isInName) {
      return true; //Incluye parentesis
    }
  }
  return false; //No incluye parentesis
}

export async function countCustomEssays(userId: number) {
  //Cuenta ensayos custom no borrados logicamente y que no son hijos de un ensayo original

  try {
    const customEssays = await db.essay_to_do.findMany({
      where: {
        userId: userId,
        AND: [{ isCustom: 1 }, { fatherEssay: 0 }, { isDeleted: 0 }],
      },
      select: { id: true, name: true },
    });
    return customEssays.length;
  } catch (err) {
    console.log("No se pudo contar ensayos customs, error: " + err);
    return -1;
  }
}

export function createCopyCustomEssayName(name: string, lastRecordedName: any, fix?: number) {
  //Crea un nuevo nombre para la copia del ensayo custom en base al nombre original

  if (lastRecordedName == null) return name + " (1)"; //Si es la primera copia de ensayo custom
  const index1 = lastRecordedName.indexOf("(");
  const index2 = lastRecordedName.indexOf(")");
  const number = lastRecordedName.substring(index1 + 1, index2);
  if (fix == 1) {
    //Caso en en que se borra ensayo personalizado antes de ser finalizado
    var newCount = +number - 1;
  } else {
    var newCount = +number + 1;
  }

  const newName = name + " (" + newCount + ")";

  return newName;
}

export function getFormatedDate(essayDate: Date) {
  //Le da formato dd/mm/aaaa a la fecha
  try {
    const formatedDate: string =
      ("0" + essayDate.getDate()).slice(-2) +
      "/" +
      ("0" + (essayDate.getMonth() + 1)).slice(-2) +
      "/" +
      essayDate.getFullYear();

    return formatedDate;
  } catch (err) {
    console.log(err);
    return "error ocurred in getFormatedDate function";
  }
}

export function formatGetScores(essayInfo: any) {
  //Ordena información obteneida de la BD para mandarla al frontend
  type scores = {
    id: number;
    createdAt: string;
    value: number;
    name: string;
    color: string;
  };
  try {
    const formatedScores: scores[] = [];
    let color: string = "";
    for (var info of essayInfo) {
      if (info.name == "Álgebra") {
        color = "bgAlgebra";
      }
      if (info.name == "Números") {
        color = "bgNumeros";
      }
      if (info.name == "Probabilidades") {
        color = "bgProb";
      }
      if (info.name == "Geometría") {
        color = "bgGeometria";
      }
      let score: scores = {
        id: info.id,
        createdAt: getFormatedDate(info.createdAt),
        value: info.score,
        name: info.name,
        color: color,
      };
      formatedScores.push(score);
    }
    return formatedScores;
  } catch (err) {
    return ["Couldn't format the info, error: " + err];
  }
}

export function calculateAverageScore(scores: any) {
  //Calcula promedio de puntajes entegados
  try {
    var averageScore = 0;
    for (var info of scores) {
      averageScore += info.score;
    }
    averageScore /= scores.length;
    return averageScore;
  } catch (err) {
    console.log("Couldn't calculate average score, error: " + err);
    return -1;
  }
}
export async function calculateAllAverageScore(scores: any) {
  //Calcula promedio de puntajes de todos los temas de ensayos
  type promedio = {
    id: number;
    name: string;
    promedio: number;
  };
  try {
    const tipos = await db.predefined_essay.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    let avgNumeros: number = 0;
    let avgAlgebra: number = 0;
    let avgGeometria: number = 0;
    let avgProbabilidad: number = 0;

    let numNumeros: number = 0;
    let numAlgebra: number = 0;
    let numGeometria: number = 0;
    let numProbabilidad: number = 0;

    let promedios: promedio[] = [];

    for (var info of scores) {
      if (info.typeOfQuestions[0].predifinedEssay.name == "ensayo numeros") {
        avgNumeros += info.score;
        numNumeros++;
      }
      if (info.typeOfQuestions[0].predifinedEssay.name == "ensayo algebra") {
        avgAlgebra += info.score;
        numAlgebra++;
      }
      if (info.typeOfQuestions[0].predifinedEssay.name == "ensayo probabilidades") {
        avgProbabilidad += info.score;
        numProbabilidad++;
      }
      if (info.typeOfQuestions[0].predifinedEssay.name == "ensayo geometria") {
        avgGeometria += info.score;
        numGeometria++;
      }
    }
    var datos: promedio;
    for (var item of tipos) {
      if (item.name == "ensayo numeros") {
        datos = {
          id: item.id,
          name: "Números",
          promedio: Math.trunc(avgNumeros / numNumeros),
        };

        if (avgNumeros == 0) {
          datos.promedio = 100;
        }
        promedios.push(datos);
      }
      if (item.name == "ensayo algebra") {
        datos = {
          id: item.id,
          name: "Álgebra",
          promedio: Math.trunc(avgAlgebra / numAlgebra),
        };

        if (avgAlgebra == 0) {
          datos.promedio = 100;
        }
        promedios.push(datos);
      }
      if (item.name == "ensayo probabilidades") {
        datos = {
          id: item.id,
          name: "Probabilidades",
          promedio: Math.trunc(avgProbabilidad / numProbabilidad),
        };

        if (avgProbabilidad == 0) {
          datos.promedio = 100;
        }
        promedios.push(datos);
      }
      if (item.name == "ensayo geometria") {
        datos = {
          id: item.id,
          name: "Geometría",
          promedio: Math.trunc(avgGeometria / numGeometria),
        };

        if (avgGeometria == 0) {
          datos.promedio = 100;
        }
        promedios.push(datos);
      }
    }

    return promedios;
  } catch (err) {
    console.log("Couldn't calculate average scores, error: " + err);
    return -1;
  }
}
export function countCorrectAnswers(essaysInfo: any, essayName: string) {
  //Obtiene el numero de respuestas correctas de un ensayo
  try {
    let totalCorrectAnswers: number = 0;
    let totalAnswers: number = 0;
    for (var info of essaysInfo) {
      /*formula de puntaje puntaje = 100 + (900 / numQuestions) * CorrectAnswers)
      (puntaje -100)/(900/numquestions) = correctAnswers */
      totalCorrectAnswers += Math.trunc((info.score - 100) / (900 / info.numberOfQuestions)); //cambio aqui para quitar
      totalAnswers += info.numberOfQuestions;
    }

    return {
      name: essayName,
      questionsAnswered: totalAnswers,
      correctAnswers: totalCorrectAnswers,
    };
  } catch (err) {
    console.log("Couln't count anwers, erro " + err);
    return -1;
  }
}

export async function countAllCorrectAnswers(userId: number, materia: string) {
  //Obtiene el numero de respuestas correctas de ensayos de matemáticas sin contar el ensayo "general"
  try {
    var essays = await db.essay_to_do.findMany({
      where: { userId: userId, AND: { isCustom: 0 }, NOT: { name: "General" } },
      select: {
        id: true,
        score: true,
        numberOfQuestions: true,
      },
    });

    return countCorrectAnswers(essays, "Resumen respuestas " + materia);
  } catch (err) {
    return {
      msg: "An error has ocurred when trying to count all the correct answers of no custom essays",
      error: err,
      success: 0,
    };
  }
}

export async function countTopicCorrectAnswers(userId: number, essayName: string) {
  //Obtiene el numero de respuestas correctas de ensayos por tema
  try {
    var essays = await db.essay_to_do.findMany({
      where: { name: essayName, AND: [{ userId: userId }, { isCustom: 0 }] },
      select: {
        id: true,
        name: true,
        score: true,
        numberOfQuestions: true,
      },
    });

    return countCorrectAnswers(essays, essayName);
  } catch (err) {
    return {
      msg: "An error has ocurred when trying to count the correct answer of a topic",
      error: err,
      success: 0,
    };
  }
}

export function readfiles(directory: string) {
  //Obtiene direcciones relativas de las imagenes para avatares
  let dirs: string[] = [];
  fs.readdirSync(directory).forEach((file) => {
    dirs.push("/img/avatars/" + file);
  });
  return dirs;
}

export function getFullPaths(avatars: any) {
  //Obtiene direcciones enteras de las imagenes para avatares
  //recibe [{imgDir: string}]
  try {
    let dirs: string[] = [];
    for (var item of avatars) {
      let newPath = path.join(__dirname.split("\\src\\lib")[0], "." + item.imgDir); //cambiar segun ubicacion del archivo
      dirs.push(newPath);
    }
    return dirs;
  } catch (err) {
    console.log(err);
    return [""];
  }
}

export function shuffleArray(array: any) {
  //Desordena el orden del contenido de un arreglo
  array.sort(() => Math.random() - 0.5);
  return array;
}
/* for (let i = 0; i < post.length; i++) {
  post[i].answer = shuffleArray(post[i].answer);
} */

async function testFunction() {
  console.log();
}

/* testFunction(); */
