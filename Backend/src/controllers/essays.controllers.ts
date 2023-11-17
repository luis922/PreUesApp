import { db } from "../db.connection";
import * as find from "../lib/find";
import * as update from "../lib/updates";
import { Request, Response } from "express";
import * as gen from "../lib/general";

const customEssayLimit = 5; //Limite de ensayos custom que un usuario puede crear al mismo tiempo

export const findEssayQuestions = async (req: Request, res: Response) => {
  //Obtiene todas las preguntas de un ensayo
  const essayName = req.query.name as string; //type of topic of the question
  if (await find.essayExist(essayName)) {
    try {
      var ensayo = await db.predefined_essay.findUnique({
        where: { name: essayName },
        select: {
          id: true,
          name: true,
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

      //ramdomiza orden de preguntas y respuestas
      if (ensayo != null) {
        gen.shuffleArray(ensayo.questions);
        for (var pregunta of ensayo.questions) {
          gen.shuffleArray(pregunta.answers);
        }
      }
      return res.status(200).json(ensayo);
    } catch (err) {
      return res.status(404).json({
        msg: "No se pudo realizar la búsqueda, verifique el mensaje de error",
        error: err,
        success: 0,
      });
    }
  }
  return res.status(404).json({ msg: "Este ensayo no existe: " + essayName, success: 0 });
};

export const findAllEssaysQuestions = async (req: Request, res: Response) => {
  //Obtiene todas las preguntas de todos los ensayos
  try {
    var ensayos = await db.predefined_essay.findMany({
      select: {
        id: true,
        name: true,
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
    //ramdomiza orden de preguntas y respuestas
    if (ensayos != null) {
      for (var tema of ensayos) {
        gen.shuffleArray(tema.questions);
        for (var pregunta of tema.questions) {
          gen.shuffleArray(pregunta.answers);
        }
      }
    }
    return res.status(200).json(ensayos);
  } catch (err) {
    return res.status(404).json({
      msg: "No se pudo realizar la búsqueda, verifique el mensaje de error",
      error: err,
      success: 0,
    });
  }
};

export const createEssay = async (req: Request, res: Response) => {
  //Crea nuevos ensayos custom o predefinidos
  var newEssay;
  var relations;
  //----------get user id---------------------
  const token = req.header("authorization");
  if (!token) {
    return res.status(401).json({ msg: "Acces denied", success: 0 });
  } //verifica que token exista

  const userID = gen.getIdfromToken(token);

  //------------------------------------------

  if (+req.body.isCustom == 1) {
    //Verifica que no se creen ensayos custom sobre el limite establecido
    const customEssaysCount = await gen.countCustomEssays(userID);
    if (customEssaysCount == -1) {
      return res.status(500).json({
        msg: "Error occurred when trying to count custom essays",
        success: 0,
      });
    } else if (customEssaysCount == customEssayLimit) {
      return res.status(409).json({
        msg:
          "Límite de " +
          customEssayLimit +
          " ensayos custom creados alcanzado, por favor elimina uno o más ensayos personalizados",
        success: 0,
      });
    }

    //Verifica que el nombre escogido no contenga caracteres reservados o prohibidos
    const reservedChars = ["(", ")"]; //caracteres que no puede tener un nombre de ensayo custom elegido por el usuario
    const containsForbiddenChar = gen.validateEssayName(req.body.name, reservedChars);

    if (containsForbiddenChar) {
      return res.status(409).json({
        msg:
          'Nombre del ensayo tiene uno o más de los siguientes caracacteres prohibidos: "' +
          reservedChars[0] +
          '" , "' +
          reservedChars[1] +
          '"',
        success: 0,
      });
    }

    //Verifica que el nombre del ensayo custom no este repetido
    const repeatedName = await find.isNameRepeated(req.body.name, +userID);
    if (repeatedName) {
      return res.status(409).json({
        msg: "Nombre para ensayo custom ya existe, por favor elija otro",
        repeated: true,
        success: 0,
      });
    }
  }

  try {
    newEssay = await db.essay_to_do.create({
      data: {
        name: req.body.name,
        userId: +req.body.userId,
        isCustom: +req.body.isCustom,
        numberOfQuestions: +req.body.numberOfQuestions,
        selectedTime: +req.body.durationTime,
      },
    });

    relations = await createTypeOfQuestionRelations(req.body.essayIDS, newEssay.id);

    if (+req.body.isCustom == 0) {
      return res.status(200).json({ newEssay: newEssay, newRelations: relations });
    } else {
      const questions = await asignQuestionsToCustomEssay(newEssay.id, req.body.essayIDS, +req.body.numberOfQuestions);

      return res.status(200).json({
        newEssay: newEssay,
        questions: questions,
        newRelations: relations,
      });
    }
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't create the new essay",
      error: err,
      success: 0,
    });
  }
};

async function asignQuestionsToCustomEssay(
  essayId: number,
  predefinedEssayIDS: Array<string>,
  numberOfQuestions: number
) {
  /*Crea relacion ensayo preguntas en tabla intermedia custom_essay_questions */
  try {
    let questions: any[] = [];
    let newRelation;
    for (let index = 0; index < predefinedEssayIDS.length; index++) {
      //recorre los id de los tipos de preguntas
      questions = await find.getPredefinedEssayQuestions(+predefinedEssayIDS[index]); //obtiene todas las preguntas de un tipo
      if (questions.length == 0) return { msg: "Un error ha ocurrido al obtener las preguntas" };
      questions = gen.getRandomQuestions(numberOfQuestions / predefinedEssayIDS.length, questions[0].questions);
      //Obtiene un numero determinado de preguntas random
      //Division es entre numeros multiplos, resultado nunca debiese ser con decimales
      for (let index = 0; index < questions.length; index++) {
        newRelation = await db.custom_essay_question.create({
          data: {
            essayToDoId: essayId,
            questionId: questions[index].id,
          },
        });
      }
    }

    const resultado = await db.custom_essay_question.findMany({
      where: { essayToDoId: essayId },
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
    });
    return resultado;
  } catch (err) {
    console.log("No se pudo crear la relación ensayo pregunta, error: " + err);
    return { msg: "No se pudo crear la relación ensayo pregunta", error: err };
  }
}

async function createTypeOfQuestionRelations(predefinedEssayIDS: Array<string>, newEssayID: number) {
  //crea relacion entre la tabla essayToDo y predefined_essay
  var newRelation;
  try {
    for (var i = 0; i < predefinedEssayIDS.length; i++) {
      newRelation = await db.type_of_question.create({
        data: {
          essayToDoId: newEssayID,
          predifinedEssayId: +predefinedEssayIDS[i],
        },
      });
    }

    const resultado = await db.type_of_question.findMany({
      where: { essayToDoId: newEssayID },
    });
    return resultado;
  } catch (err) {
    console.log("Couldn't create relation, error: " + err);
    return [];
  }
}

async function createCustomEssayQuestionRelation(answersIDS: Array<string>, essayId: number) {
  var questionId;

  //Verifica que la respuesta exista al igual que la pregunta a la que pertenece
  for (let j = 0; j < answersIDS.length; j++) {
    if (await find.existAnswer(+answersIDS[j])) {
      questionId = await find.getQuestionIdFromAnswerId(+answersIDS[j]);

      if (questionId == -1) {
        return "Couldn't find the question to which the answer belongs";
      }

      const essayQuestion = await db.custom_essay_question.create({
        data: {
          essayToDoId: essayId,
          questionId: questionId,
        },
      });
    } else {
      return {
        msg: "Couldn't find answer with id: " + answersIDS[j],
        success: 0,
      };
    }
  }

  return await db.custom_essay_question.findMany({
    where: { essayToDoId: essayId },
  });
}

async function createCustomEssayQuestionRelation2(essayId: number, questionsId: number[]) {
  //Establece la relación a partir de un arreglo con las ids de las preguntas y el id del ensayo

  try {
    for (var questionId of questionsId) {
      const essayQuestion = await db.custom_essay_question.create({
        data: {
          essayToDoId: essayId,
          questionId: questionId,
        },
      });
    }
    return await db.custom_essay_question.findMany({
      where: { essayToDoId: essayId },
    });
  } catch (err) {
    console.log("Couldn't create custom_essay_question relations, error: " + err);
    return [];
  }
}

export const submitAnswers = async (req: Request, res: Response) => {
  //Almacena las respuestas escogidas por el usuario
  const token = req.header("authorization");
  if (!token) {
    return res.status(401).json({ msg: "Acces denied", success: 0 });
  } //verifica que token exista

  const userID = gen.getIdfromToken(token);

  let existEssay = await find.existEssaytoDo(+req.body.essayId);
  if (!existEssay) {
    return res.status(404).json({
      msg: "Essay id: " + +req.body.essayId + " doesn't exist",
      success: 0,
    });
  } //verifica que ensayo exista

  var relations;
  if (+req.body.isCustom == 0) {
    relations = await createCustomEssayQuestionRelation(
      //crea relación entre essaytoDo y question si es ensayo prefefinido
      req.body.answersIDS,
      +req.body.essayId
    );
  }

  var updatedTime = await update.updateEssayCompletionTime(
    //update essayTime
    +req.body.essayTime,
    +req.body.essayId
  );

  try {
    var subAnswer;
    for (let i = 0; i < req.body.answersIDS.length; i++) {
      subAnswer = await db.chosen_answer.create({
        data: {
          userId: +userID,
          answerId: +req.body.answersIDS[i],
          essayToDoId: +req.body.essayId,
        },
      });
    }
    const resultado = await db.chosen_answer.findMany({
      where: {
        AND: [{ essayToDoId: +req.body.essayId }, { userId: +userID }],
      },
    });

    let numCorrectAnswers = await gen.countCorrectQuestions(+req.body.essayId);

    const numQuestions = await db.essay_to_do.findUnique({
      where: { id: +req.body.essayId },
      select: { numberOfQuestions: true },
    });

    await update.updateEssayScore(+req.body.essayId, numCorrectAnswers);

    if (+req.body.isCustom == 0) {
      await update.updateUserCoins(userID, numCorrectAnswers);
      return res.status(200).json({
        answers: resultado,
        QuestionEssayRelations: relations,
        essay: updatedTime,
      });
    } else {
      await update.updateUserCoins(userID, 2);
      return res.status(200).json({
        answers: resultado,
        essay: updatedTime,
      });
    }
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't submit answer",
      error: err,
      success: 0,
    });
  }
};

export const getSubmittedEssay = async (req: Request, res: Response) => {
  //Obtiene el detalle de un ensayo ya realizado
  const essayId = req.query.id as string;
  try {
    const submittedEssay = await find.getSubmittedEssay(+essayId);
    if (submittedEssay == 0) {
      return res.status(404).json({ msg: "Couldn't find the essay id: " + essayId, success: 0 });
    } //Indica si hubo problemas al buscar el ensayo

    const formatedEssay = await gen.formatSubmittedEssay(submittedEssay);
    return res.status(200).json(formatedEssay);
  } catch (err) {
    return res.status(404).json({
      msg: "Couldn't find the essay",
      error: err,
      success: 0,
    });
  }
};

export const getHistory = async (req: Request, res: Response) => {
  //Obtiene todos los ensayos realizados por el usuario

  const token = req.header("authorization");
  if (!token) {
    return res.status(401).json({ msg: "Acces denied", success: 0 });
  } //verifica que token exista
  const userId = gen.getIdfromToken(token);

  try {
    var history: any[] = [];
    //obtiene los id de los ensayos respondidos por el usuario
    const essaysDone = await db.chosen_answer.groupBy({
      by: "essayToDoId",
      where: { userId: +userId },
    });
    //obtiene la info los ensayos respondidos por el usuario en base a los id de la variable history
    for (let index = 0; index < essaysDone.length; index++) {
      history.push(
        await db.essay_to_do.findUnique({
          where: { id: essaysDone[index].essayToDoId },
          select: {
            id: true,
            name: true,
            score: true,
            createdAt: true,
            numberOfQuestions: true,
          },
        })
      );
    }
    //Cambia formato de la fecha de creación
    for (var info of history) {
      info.createdAt = gen.getFormatedDate(info.createdAt);
    }

    return res.status(200).json({ historial: history });
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't retrieve history",
      error: err,
      success: 0,
    });
  }
};

export const getCustomEssays = async (req: Request, res: Response) => {
  //Obtiene todos los ensayos custom del usuario

  const token = req.header("authorization");
  if (!token) {
    return res.status(401).json({ msg: "Acces denied", success: 0 });
  } //verifica que token exista
  const userId = gen.getIdfromToken(token);

  try {
    const customEssays = await db.essay_to_do.findMany({
      where: {
        AND: [{ isCustom: 1 }, { userId: +userId }, { isDeleted: 0 }, { fatherEssay: 0 }],
      },
      select: {
        id: true,
        name: true,
        selectedTime: true,
        numberOfQuestions: true,
        createdAt: true,
        isCustom: true,
      },
    });
    return res.status(200).json({ customEssays: customEssays });
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't retrieve custom essays",
      error: err,
      success: 0,
    });
  }
};

async function createCopyCustomEssay(essayInfo: any) {
  try {
    const essayName = gen.createCopyCustomEssayName(essayInfo.name, essayInfo.lastRecordedName);

    const newCopyEssay = await db.essay_to_do.create({
      data: {
        name: essayName,
        userId: essayInfo.userId,
        isCustom: 1,
        numberOfQuestions: essayInfo.numberOfQuestions,
        selectedTime: essayInfo.selectedTime,
        fatherEssay: essayInfo.id,
      },
    });

    const newTypeQuestionRelation = await createTypeOfQuestionRelations(essayInfo.typeOfQuestions, newCopyEssay.id);

    if (newTypeQuestionRelation.length == 0) {
      console.log("An error has occurred when trying to create typeQuestion relations");
      return null;
    }
    const newEssayQuestionRelation = await createCustomEssayQuestionRelation2(newCopyEssay.id, essayInfo.questions);

    if (newEssayQuestionRelation.length == 0) {
      console.log("An error has occurred when trying to essay question relations");
      return null;
    }
    return newCopyEssay;
  } catch (err) {
    console.log("An error has ocurred when trying to create the copy essay, error: " + err);
    return null;
  }
}

export const getCustomEssay = async (req: Request, res: Response) => {
  //Obtiene la info del ensayo custom, sus preguntas y alternativas

  var essayId = req.query.essayId as string;
  const existEssay = await find.existEssaytoDo(+essayId);
  if (!existEssay) {
    return res.status(404).json({ msg: "Essay id: " + essayId + " doesn't exist", success: 0 });
  } //verifica que ensayo exista

  //Verifica que el id del ensayo corresponda a uno custom
  const isEssayCustom = await find.isEssayCustom(+essayId);
  if (!isEssayCustom) {
    return res.status(409).json({ msg: "Essay id: " + essayId + " isn't custom", success: 0 });
  }

  //Verifica si el ensayo ya ha sido respondido
  const isEssayAnswered = await find.isEssayAnswered(+essayId);
  if (isEssayAnswered) {
    //Crea una copia de la información del ensayo padre/original
    const copyEssay = await find.getCustomEssayForCopy(+essayId);
    if (copyEssay == null) {
      return res.status(409).json({ msg: "Couldn't coppy Essay id: " + essayId, success: 0 });
    }

    //Crea un ensayo copia del ensayo original en la bd
    const newCopyEssay = await createCopyCustomEssay(copyEssay);
    if (newCopyEssay == null) {
      return res.status(409).json({
        msg: "Couldn't create coppy of Essay id: " + essayId,
        success: 0,
      });
    }
    //update lastRecordedName de ensayo padre/original/copiado
    const updEssay = await db.essay_to_do.update({
      where: { id: +essayId },
      data: {
        lastRecordedName: newCopyEssay.name,
      },
    });

    essayId = newCopyEssay.id.toString();
  }

  try {
    const customEssay = await db.essay_to_do.findUnique({
      where: { id: +essayId },
      select: {
        id: true,
        name: true,
        selectedTime: true,
        numberOfQuestions: true,
        lastRecordedName: true,
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
      },
    });
    const formatedEssay = gen.formatCustomEssay(customEssay);

    //Randomiza orden de preguntas y respuestas
    gen.shuffleArray(formatedEssay.questions);
    for (var pregunta of formatedEssay.questions) {
      gen.shuffleArray(pregunta.answers);
    }

    return res.status(200).json(formatedEssay);
    /* return res.status(200).json(customEssay); */
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't retrieve custom essay",
      error: err,
      success: 0,
    });
  }
};

export const physicalDeleteEssay = async (req: Request, res: Response) => {
  //Borrado físico del ensayo
  const essayId = req.query.essayId as string;
  const ensayoIniciado = req.query.started as string;

  if (!(await find.existEssaytoDo(+essayId))) {
    return res.status(404).send({ msg: "Essay id: " + essayId + " doesn't exist", success: 0 });
  } //verifica que ensayo exista

  if (+ensayoIniciado == 1 && (await find.isFatherEssay(+essayId)))
    return res.status(200).json("no se elimino por ser ensayo custom padre");

  if (+ensayoIniciado == 1 && !((await find.isFatherEssay(+essayId)) && find.isEssayCustom(+essayId))) {
    await update.updateLastRecordedName(+essayId);
  } //Para evitar que se reserve un nombre de ensayo custom cuando se cancela la realización de un ensayo

  try {
    const delEssay = await db.essay_to_do.delete({
      where: { id: +essayId },
    });
    return res.status(200).json({ deletedEssay: delEssay });
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't do a physical delete of custom essay id: " + essayId,
      error: err,
      success: 0,
    });
  }
};

export const logicalDeleteEssay = async (req: Request, res: Response) => {
  //Borrado lógico del ensayo
  const essayId = req.query.essayId as string;

  try {
    const delEssay = await db.essay_to_do.update({
      where: { id: +essayId },
      data: { isDeleted: 1 },
    });
    return res.status(200).json({ succes: 1 });
  } catch (err) {
    return res.status(500).json({
      msg: "Couldn't do logical delete of essay id: " + req.body.essayId,
      error: err,
      succes: 0,
    });
  }
};

/* async function testFunction() {
  console.log();
} */
/* testFunction(); */
