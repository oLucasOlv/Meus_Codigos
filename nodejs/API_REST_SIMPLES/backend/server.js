import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./src/app.js"; 

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://lucas:28g1GXpMaVxPK1jv@primeiroprojeto.g9xod.mongodb.net/?retryWrites=true&w=majority&appName=primeiroProjeto"


if (!MONGO_URI) {
  console.error("Erro: MONGO URI não definido no .env!");
  process.exit(1); // Sai do processo para evitar comportamento inesperado
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Banco de dados conectado!"))
  .catch((error) => console.log("Erro ao conectar:", error));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
