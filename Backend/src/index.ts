import express from "express";
import dotenv from "dotenv";
import essays from "./routes/essays";
import stats from "./routes/statistics";
import user from "./routes/user";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(user);
app.use(essays);
app.use(stats);

app.listen(port, () => {
  console.log("Escuchando puerto: " + port);
});
