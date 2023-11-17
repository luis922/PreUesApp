import { db } from "../db.connection";
import { Request, Response } from "express";
import * as gen from "../lib/general";

export const getScore = async (req: Request, res: Response) => {
  //Obtiene los puntajes y fechas de los ensayos realizados de un tema especifico
  //Entrada: name = nombre del tema / no para ensayos custom
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    const essayName = req.query.name as string;

    var essays = await db.essay_to_do.findMany({
      where: { name: essayName, NOT: { name: "General" }, AND: [{ userId: userId }, { isCustom: 0 }] },
      select: {
        id: true,
        name: true,
        createdAt: true,
        score: true,
      },
    });
    if (essays.length == 0) {
      return res.status(200).json([]); // null
    }
    return res.status(200).json(gen.formatGetScores(essays));
  } catch (err) {
    return res.status(500).json({ msg: "Couldn't obtain the scores", error: err, succes: 0 });
  }
};

export const getAllScores = async (req: Request, res: Response) => {
  //Obtiene los puntajes y fechas de los ensayos realizados de un tema especifico
  //Entrada: name = nombre del tema / no para ensayos custom
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    var essays = await db.essay_to_do.findMany({
      where: { userId: userId, AND: { isCustom: 0 } },
      select: {
        id: true,
        name: true,
        createdAt: true,
        score: true,
        typeOfQuestions: {
          select: {
            predifinedEssay: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    if (essays.length == 0) {
      return res.status(200).json({ score: 0 });
    }
    return res.json(essays);
    /* return res.status(200).json(gen.formatGetScores(essays)); */
  } catch (err) {
    return res.json(err);
    /* return res
      .status(500)
      .json({ msg: "Couldn't obtain the scores", error: err, succes: 0 });
  } */
  }
};

export const getAverageScore = async (req: Request, res: Response) => {
  //revisar
  /* Obtiene el promedio de puntajes de un tipo de ensayo no custom 
    Entrada: name = nombre del tema / no para ensayos custom*/
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    const essayName = req.query.name as string;

    var essays = await db.essay_to_do.findMany({
      where: { name: essayName, AND: [{ userId: userId }, { isCustom: 0 }] },
      select: {
        id: true,
        name: true,
        score: true,
      },
    });

    if (essays.length == 0) {
      return res.status(200).json({ averageScore: 0 }); // 0 o 100
    }
    return res.status(200).json({ averageScore: gen.calculateAverageScore(essays) });
  } catch (err) {
    return res.status(500).json({
      msg: "An error has ocurred when trying to calculate average score",
      error: err,
      success: 0,
    });
  }
};

export const getAllAverageScores = async (req: Request, res: Response) => {
  /* Obtiene el promedio de puntajes de un tipo de ensayo no custom 
    Entrada: name = nombre del tema / no para ensayos custom*/
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    var essays = await db.essay_to_do.findMany({
      where: { userId: userId, AND: { isCustom: 0 }, NOT: { name: "General" } },
      select: {
        id: true,
        name: true,
        score: true,
        typeOfQuestions: {
          select: {
            predifinedEssay: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json(await gen.calculateAllAverageScore(essays));
  } catch (err) {
    return res.status(500).json({
      msg: "An error has ocurred when trying to calculate average scores",
      error: err,
      success: 0,
    });
  }
};

export const countTopicCorrectAnswers = async (req: Request, res: Response) => {
  //revisar
  /*obtiene número de preguntas respondidas correctamente de un tema
   Entrada: name = nombre del tema / no para ensayos custom*/
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    const essayName = req.query.name as string;

    return res.status(200).json(await gen.countTopicCorrectAnswers(userId, essayName));
  } catch (err) {
    return res.status(500).json({
      msg: "An error has ocurred when trying to count the correct answer of a topic",
      error: err,
      success: 0,
    });
  }
};

export const countAllCorrectAnswers = async (req: Request, res: Response) => {
  /*obtiene número de preguntas respondidas correctamente en ensayos no custom
Entrada: no tiene*/
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    return res.status(200).json(await gen.countAllCorrectAnswers(userId, ""));
  } catch (err) {
    return res.status(500).json({
      msg: "An error has ocurred when trying to count all the correct answers of no custom essays",
      error: err,
      success: 0,
    });
  }
};

export const countAllSubjectCorrectAnswers = async (req: Request, res: Response) => {
  //obtiene número de preguntas respondidas correctamente de una materia y su desglose (ej:matematicas)
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ msg: "Acces denied", success: 0 });
    } //verifica que token exista
    const userId = gen.getIdfromToken(token);

    const matematica: string[] = ["Álgebra", "Números", "Probabilidades", "Geometría"]; //Agregar general mates???
    /* const lenguaje:string[] = [] 
    const historia:string[] = [] 
    const ciencias:string[] = [] 
    const fisica:string[] = [] 
    const quimica:string[] = [] 
    const biologia:string[] = [] 
    */
    const cuenta = [];
    const materia = req.query.materia as string;

    if (materia == "matematica") {
      cuenta.push(await gen.countAllCorrectAnswers(userId, materia));
      for (var tema of matematica) {
        cuenta.push(await gen.countTopicCorrectAnswers(userId, tema));
      }
    }
    return res.status(200).json(cuenta);
  } catch (err) {
    return res.status(500).json({
      msg: "An error has ocurred when trying to count all the correct answers of certain topic",
      error: err,
      success: 0,
    });
  }
};

/* async function testFunction() {
  console.log(await getScores2());
}
testFunction(); */
