import express from "express";
import * as stats from "../controllers/statistics.controllers";
import { tokenValidation } from "../controllers/tokenValidation";

const router = express.Router();

router.get("/scores/", tokenValidation, stats.getScore); //obtiene todos los puntajes de un tipo de ensayo no custom
router.get("/allScores/", tokenValidation, stats.getAllScores); //obtiene todos los puntajes de ensayos no custom
router.get("/averageScore/", tokenValidation, stats.getAverageScore); //obtiene el promedio de puntajes de un tipo de ensayo no custom
router.get("/allAverageScore/", tokenValidation, stats.getAllAverageScores); //obtiene el promedio de puntajes de cada ensayo no custom
router.get("/topicCorrectAnswers/", tokenValidation, stats.countTopicCorrectAnswers); //obtiene número de preguntas respondidas correctamente de un tema
router.get("/allCorrectAnswers/", tokenValidation, stats.countAllCorrectAnswers); //obtiene número de preguntas respondidas correctamente de todos los ensayos no custom
router.get("/groupTopicCorrectAnswers/", tokenValidation, stats.countAllSubjectCorrectAnswers); //obtiene número de preguntas respondidas correctamente de una materia y su desglose (ej:matematicas)
export default router;
