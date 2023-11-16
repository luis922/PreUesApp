import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    //Agregar verficación de tiempo de duración del token cuando se defina
    const bearerToken = req.header("authorization");

    if (!bearerToken) return res.status(401).send("Acces denied"); // si no se envía token

    const token = bearerToken.split(" ")[1]; // quita el bearer al token
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || "tokensreplacementincaseisundifined");
  } catch (error) {
    return res.status(401).send({ error: error });
  }
  next();
};
