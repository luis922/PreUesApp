import { db } from "../db.connection";
import { validateEssayName } from "./general";

export async function findUserbyName(name: string) {
  //Encontrar usuario por nombre
  try {
    const user = await db.user.findUnique({
      where: {
        name: name,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

//ensayo
export async function essayExist(nombre: string) {
  //Verifica si existe tema de preguntas segun nombre
  try {
    var essay = await db.predefined_essay.findUnique({
      where: { name: nombre },
    });
  } catch (error) {
    console.log({
      success: 0, //para identificar fallo de la búsqueda
      msg: "Catch: No se pudo encontrar el ensayo: " + nombre,
      err: error,
    });
    return false;
  }

  if (essay) {
    return true;
  }
  return false;
}

/* export async function customEssayExist(nombre: string) {
  try {
    var essay = await db.essay_to_do.findUnique({
      where: { name: nombre },
    });
  } catch (error) {
    console.log({
      cod: 0, //para identificar fallo de la búsqueda
      msg: "Catch: No se pudo encontrar el ensayo: " + nombre,
      err: error,
    });
    return false;
  }

  if (essay) {
    return true;
  }
  return false;
} */

export async function existEssaytoDo(id: number) {
  //Verifica si existe un ensayo por id
  try {
    var essay = await db.essay_to_do.findUnique({
      where: { id: id },
    });
  } catch (err) {
    console.log("No se pudo realizar la búsqueda, el error fue el siguiente: " + err);
    return false;
  }
  if (essay) {
    return true;
  }
  return false;
}

export async function existTOQ(id: number) {
  //Verifica si existe relacion type_of_question
  try {
    var essay = await db.type_of_question.findMany({
      where: { essayToDoId: id },
    });
  } catch (err) {
    console.log("No se pudo realizar la búsqueda, el error fue el siguiente: " + err);
    return false;
  }

  if (essay.length > 0) {
    return true;
  }
  return false;
}

export async function findAllTypeOfQuestionRelations(essayId: number) {
  //Encuentra las relaciones entre ensayo realizado y tipo de ensayo de un ensayo en especifico
  if (await existTOQ(essayId)) {
    // si existe la relación
    try {
      var relations = await db.type_of_question.findMany({
        where: { essayToDoId: essayId },
      });
      return relations;
    } catch (err) {
      return {
        msg: "No se encontró ninguna relación",
        error: err,
      };
    }
  } else {
    return "no existe relacion con la essay Id: " + essayId;
  }
}

export async function existAnswer(id: number) {
  //Verifica si existe una respuesta
  try {
    var answer = await db.answer.findUnique({
      where: { id: id },
    });
  } catch (err) {
    console.log("No se pudo realizar la búsqueda, el error fue el siguiente: " + err);
    return false;
  }
  if (answer) {
    return true;
  }
  return false;
}

export async function existQuestion(id: number) {
  //Verifica si existe una pregunta
  try {
    var question = await db.question.findUnique({
      where: { id: id },
    });
  } catch (err) {
    console.log("No se pudo realizar la búsqueda, el error fue el siguiente: " + err);
    return false;
  }
  if (question) {
    return true;
  }
  return false;
}

export async function getQuestionIdFromAnswerId(aId: number) {
  //Obtiene el id de una pregunta a partir de la id de una respeusta
  try {
    var question = await db.answer.findUnique({
      where: { id: aId },
      select: {
        questionId: true,
      },
    });
    if (!question) {
      console.log("Couldn't find question using answer id: " + aId);
      return -1;
    }
    return question.questionId;
  } catch (err) {
    console.log({
      msg: "Couldn't find question using answer id: " + aId,
      error: err,
    });
    return -1;
  }
}

export async function isNameRepeated(essayName: string, userID: number) {
  //Verifica que un nombre de ensayo personalizado no esta repetido
  try {
    var repeatedEssay = await db.essay_to_do.findMany({
      where: { name: essayName, AND: { isCustom: 1 } },
    });
  } catch (err) {
    console.log({
      msg: "Couldn't make the search",
      error: err,
    });
    return true;
  }
  if (repeatedEssay.length > 0) {
    return true;
  }
  return false;
}

export async function getPredefinedEssayQuestions(preDefEssayId: number) {
  //Obtiene todas las preguntas de un tema segun el id del tema
  try {
    const questions = await db.predefined_essay.findMany({
      where: { id: preDefEssayId },
      select: {
        id: true,
        type: true,
        questions: {
          select: {
            id: true,
            subject: true,
            question: true,
            videoLink: true,
            answers: {
              select: {
                id: true,
                label: true,
                isCorrect: true,
              },
            },
          },
        },
      },
    });
    return questions;
  } catch (err) {
    console.log("No se pudo encontrar las preguntas del ensayo predefinido, msg error: " + err);
    return [];
  }
}

export async function getSubmittedEssay(essayId: number) {
  //Obtiene la información necesaria para mostrar en el feedback que se da sobre un ensayo
  try {
    let existEssay = await existEssaytoDo(essayId);
    if (!existEssay) {
      console.log({
        msg: "Essay id: " + essayId + " doesn't exist",
        success: 0,
      });
      return 0;
    } //verifica que ensayo exista

    const submittedEssay = await db.essay_to_do.findUnique({
      where: { id: +essayId },
      select: {
        id: true,
        name: true,
        selectedTime: true,
        totalTime: true,
        numberOfQuestions: true,
        createdAt: true,
        score: true,
        isCustom: true,
        questions: {
          select: {
            selectedQuestion: {
              select: {
                id: true,
                subject: true,
                question: true,
                videoLink: true,
                answers: {
                  select: {
                    id: true,
                    label: true,
                    isCorrect: true,
                  },
                },
              },
            },
          },
        },
        chosenAnswers: {
          select: {
            answer: {
              select: {
                id: true,
                label: true,
                isCorrect: true,
              },
            },
          },
        },
      },
    });
    return submittedEssay;
  } catch (err) {
    console.log({
      msg: "Couldn't find the essay",
      error: err,
      success: 0,
    });
    return 0;
  }
}

export async function existEmail(email: string) {
  //verifica si existe el email en la base de datos

  try {
    var user = await db.user.findUnique({
      where: { email: email },
    });
  } catch (err) {
    console.log("No se pudo realizar la búsqueda, el error fue el siguiente: " + err);
    return false;
  }

  return user ? true : false;
}

export async function isEssayAnswered(essayId: number) {
  //Verifica si ya se respondió el ensayo

  try {
    var chosenAnswers = await db.chosen_answer.findMany({
      where: { essayToDoId: essayId },
      select: { id: true },
    });
  } catch (err) {
    console.log("Couldn't do the search, error: " + err);
    return false;
  }

  return chosenAnswers.length > 0 ? true : false;
}

export async function isEssayCustom(essayId: number) {
  //Verifica si un ensayo es custom

  try {
    var essay = await db.essay_to_do.findUnique({
      where: { id: essayId },
      select: { isCustom: true },
    });
  } catch (err) {
    console.log("Couldn't do the search, error: " + err);
    return false;
  }

  if (essay == null) {
    console.log("Algun error ocurrió al comprobar si el ensayo es custom, ensayo: " + essay);
    return false;
  } else {
    return essay.isCustom == 1 ? true : false;
  }
}

export async function getCustomEssayForCopy(essayId: number) {
  //Obtiene la información necesaria de un ensayo custom para poder realizarlo varias veces

  try {
    var customEssay = await db.essay_to_do.findUnique({
      where: { id: essayId },
      select: {
        id: true,
        userId: true,
        name: true,
        numberOfQuestions: true,
        selectedTime: true,
        lastRecordedName: true,
        typeOfQuestions: {
          select: {
            predifinedEssayId: true,
          },
        },
        questions: {
          select: {
            questionId: true,
          },
        },
      },
    });
    if (customEssay != null) {
      //Reformatea los arreglos typeOfQuestions y questions

      var idArray = [];
      for (let i = 0; i < customEssay.typeOfQuestions.length; i++) {
        let idNumber = customEssay.typeOfQuestions[i].predifinedEssayId;
        idArray.push(idNumber.toString());
      }
      customEssay.typeOfQuestions = [];
      customEssay.typeOfQuestions = idArray as any;

      idArray = [];
      for (let i = 0; i < customEssay.questions.length; i++) {
        idArray.push(customEssay.questions[i].questionId);
      }
      customEssay.questions = [];
      customEssay.questions = idArray as any;
    }

    return customEssay;
  } catch (err) {
    console.log("An error has occurred when trying to find the essay id: " + essayId + " ,error: " + err);
    return [];
  }
}

export async function isFatherEssay(essayId: number) {
  //Verifica si un ensayo custom es padre(ensayo custom original)
  const essay = await db.essay_to_do.findUnique({
    where: { id: essayId },
    select: {
      isCustom: true,
      name: true,
    },
  });

  if (essay == null) return false;
  return essay.isCustom == 1 && validateEssayName(essay.name, ["(", ")"]) == false ? true : false;
  //ensayos padres no pueden tener parentesis en sus nombres, solo los hijos pueden
}

async function testFunction() {
  console.log(await isFatherEssay(30));
}

/* testFunction(); */
