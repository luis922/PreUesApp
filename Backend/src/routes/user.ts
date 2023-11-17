import express from "express";
import * as user from "../controllers/user.controllers";
import { tokenValidation } from "../controllers/tokenValidation";

const router = express.Router();

router.post("/signup/", user.signup); //Registro de usuario
router.post("/login/", user.login); //Inicio de sesión
router.post("/recoverPassword/", user.recoverPassword); //Recupera contraseña por correo
router.patch("/changePassword/", tokenValidation, user.changePassword); //Cambia contraseña desde el perfil de ususario
router.get("/coins/", tokenValidation, user.getCoins); //Obtiene las monedas actuales del usuario
router.get("/avatars/", tokenValidation, user.getAvatars); //Obtiene las direcciones de todos los avatares
router.get("/avatar/", tokenValidation, user.getCurrentAvatar); //Obtiene la dirección del avatar actual del usuario
router.patch("/changeAvatar/", tokenValidation, user.changeAvatar); //Cambia el avatar actual por otro
export default router;
