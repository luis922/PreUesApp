import { db } from "../db.connection";
import { createCopyCustomEssayName } from "./general";

export async function updateEssayCompletionTime(time: number, essayId: number) {
  //Actualiza el tiempo en que se completo un ensayo
  try {
    const essay = await db.essay_to_do.update({
      where: { id: essayId },
      data: {
        totalTime: time,
      },
    });

    return essay;
  } catch (err) {
    console.log("Couldn't update totalTime:" + err);
    return;
  }
}

export async function updateEssayScore(essayId: number, correctAnswers: number) {
  try {
    //Calcula puntaje del ensayo (de 100 a 1000) y lo actualiza en la bd
    const numQuestions = await db.essay_to_do.findUnique({
      where: { id: essayId },
      select: {
        numberOfQuestions: true,
      },
    });
    if (numQuestions == null) {
      console.log("Couldn't update score");
      return;
    }
    const essay = await db.essay_to_do.update({
      where: { id: essayId },
      data: {
        score: Math.trunc(100 + (900 / numQuestions.numberOfQuestions) * correctAnswers),
      },
    });
    return;
  } catch (err) {
    console.log("Couldn't update score:" + err);
    return;
  }
}

export async function updateUserCoins(userId: number, correctAnswers: number) {
  //Actualiza el numero de monedas del usuario
  try {
    const userInfo = await db.user.findUnique({
      where: { id: userId },
      select: { coins: true },
    });

    if (userInfo != null) {
      const user = await db.user.update({
        where: { id: userId },
        data: {
          coins: userInfo.coins + correctAnswers,
        },
      });
      return;
    }
    console.log("User info is null");
  } catch (err) {
    console.log("Couldn't update coins:" + err);
    return;
  }
}

export async function updateLastRecordedName(essayId: number) {
  //Actualiza el campo lastRecordedName en un ensayo personalizado padre indicando el ultimo nombre asignado al ensayo custom
  try {
    const essayInfo = await db.essay_to_do.findUnique({
      where: { id: essayId },
      select: {
        name: true,
        fatherEssay: true,
      },
    });

    if (essayInfo != null) {
      const nombreSinParentesis = essayInfo.name.split(" (")[0];
      const index1 = essayInfo.name.indexOf("(");
      const index2 = essayInfo.name.indexOf(")");
      const numero = essayInfo.name.substring(index1 + 1, index2);

      if (numero == "1") {
        const user = await db.essay_to_do.update({
          where: { id: essayInfo.fatherEssay },
          data: {
            lastRecordedName: null,
          },
        });
      } else {
        const user = await db.essay_to_do.update({
          where: { id: essayInfo.fatherEssay },
          data: {
            lastRecordedName: createCopyCustomEssayName(nombreSinParentesis, essayInfo.name, 1),
          },
        });
      }

      return;
    }
    console.log("Essay info is null");
  } catch (err) {
    console.log("Couldn't update lastRecordedName:" + err);
    return;
  }
}
