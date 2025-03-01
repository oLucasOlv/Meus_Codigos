import dotenv from "dotenv";
import path from "path";

// Carrega o .env da raiz
dotenv.config({ path: path.resolve(".env") });

console.log("TESTE:", process.env.TESTE); // Deve mostrar "funcionou"
console.log("MONGO_URI:", process.env.MONGO_URI);