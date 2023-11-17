import { db } from "../src/db.connection";
import { ensayos } from "./preguntas";
import * as path from "path";
import { readfiles } from "../src/lib/general";

/* function maxLargoPregunta() {
  let mayor = 0;
  let j;
  let i;
  let l = 0;
  for (i = 0; i < ensayos.length; i++) {
    for (j = 0; j < ensayos[i].questions.length; j++) {
      l++;
      console.log(
        "largo pregunta " + l + ": " + ensayos[i].questions[j].question.length
      );
      if (ensayos[i].questions[j].question.length > mayor) {
        console.log(
          "mayor que anterior: " + ensayos[i].questions[j].question.length
        );
        mayor = ensayos[i].questions[j].question.length;
      }
    }
  }
  console.log(
    "largo max de una pregunta: " +
      mayor +
      "\nnumero de preguntas: " +
      l +
      "\nnumero de ensayos: " +
      i
  );
  return;
}

maxLargoPregunta(); */

async function poblarAvatares() {
  try {
    const result: string = path.join(__dirname, "../img/avatars"); //cambiar segun ubicacion de seed.ts y la carpeta img
    //console.log(result);
    const r = readfiles(result);
    //console.log(r);
    for (var item of r) {
      const newAvatar = await db.avatar.create({
        data: {
          name: item.split("/")[3],
          imgDir: item,
        },
      });
    }
    return "Guardado de info de avatares completado";
  } catch (err) {
    return "No se pudo guardar info de avatares, error: " + err;
  }
}

async function poblarBD() {
  //Funcion para poblar la base de datos
  console.log(await poblarAvatares());
  //recorre los ensayos
  var newEnsayo;
  var newPregunta;
  var newRespuesta;
  for (let i = 0; i < ensayos.length; i++) {
    try {
      //crea y almacena el nuevo ensayo en la bd
      newEnsayo = await db.predefined_essay.create({
        data: {
          name: ensayos[i].name,
          type: ensayos[i].type,
        },
      });
    } catch (error) {
      console.log("No se pudo crear el ensayo, " + ensayos[i].name + ". Indice i: " + i + " error : " + error);
      return "No se pudo crear el ensayo, " + ensayos[i].name + ". Indice i: " + i + " error : " + error;
    }
    //recorre las preguntas del actual ensayo
    for (let j = 0; j < ensayos[i].questions.length; j++) {
      try {
        //crea y almacena la nueva pregunta en la bd
        newPregunta = await db.question.create({
          data: {
            subject: ensayos[i].questions[j].subject,
            question: ensayos[i].questions[j].question,
            videoLink: ensayos[i].questions[j].link_resolution,
            imageDir: ensayos[i].questions[j].imgDir,
            predifinedEssayId: newEnsayo.id,
          },
        });
      } catch (error) {
        console.log("No se pudo guardar la pregunta: " + ensayos[i].questions[j].question + "\nerror : " + error);
        return (
          "No se pudo guardar la pregunta: " + ensayos[i].questions[j].question + "indice :" + j + "\nerror : " + error
        );
      }
      //recorre las respuestas a las preguntas del actual ensayo
      for (let k = 0; k < ensayos[i].questions[j].answer.length; k++) {
        try {
          // crea y almacena la nueva respuesta en la bd
          newRespuesta = await db.answer.create({
            data: {
              label: ensayos[i].questions[j].answer[k].label,
              isCorrect: ensayos[i].questions[j].answer[k].right,
              questionId: newPregunta.id,
            },
          });
        } catch (error) {
          console.log({
            lastPreSave: newRespuesta,
            errMsg: "No se pudo guardar la respuesta: indice: " + k + " \nerror : " + error,
          });

          return "No se pudo guardar la respuesta: indice: " + k + " \nerror : " + error;
        }
      }
    }
  }
}

poblarBD()
  .then(async () => {
    await db.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await db.$disconnect();

    process.exit(1);
  });
