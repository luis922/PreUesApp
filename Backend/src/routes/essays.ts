import express from "express";
import * as essay from "../controllers/essays.controllers";
import { tokenValidation } from "../controllers/tokenValidation";

const router = express.Router();

router.get("/essayQuestions/", essay.findEssayQuestions); //Obtiene todas las preguntas de un ensayo
router.get("/allQuestions/", essay.findAllEssaysQuestions); //Obtiene todas las preguntas de todos los ensayos
router.post("/newEssay/", tokenValidation, essay.createEssay); //Crea nuevos ensayos custom o predefinidos
router.post("/submitAnswers/", tokenValidation, essay.submitAnswers); //Alamcena las respuestas al ensayo
router.get("/submittedEssay/", tokenValidation, essay.getSubmittedEssay); //Obtiene el detalle de un ensayo ya realizado
router.get("/history/", tokenValidation, essay.getHistory); //Obtiene todos los ensayos realizados por el usuario
router.get("/showCustomEssays/", tokenValidation, essay.getCustomEssays); //Listar ensayos custom del usuario
router.get("/customEssay/", tokenValidation, essay.getCustomEssay); //Obtener los datos de un ensayo custom particular
router.delete("/physicalDelEssay/", tokenValidation, essay.physicalDeleteEssay); //Borrado físico del ensayo
router.delete("/logicalDelEssay/", tokenValidation, essay.logicalDeleteEssay); //Borrado lógico del ensayo
export default router;
