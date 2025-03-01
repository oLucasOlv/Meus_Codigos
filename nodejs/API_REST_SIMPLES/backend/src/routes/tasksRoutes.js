import express from "express";
import { 
  createTask, 
  getTasks, 
  getTaskById, 
  updateTask, 
  deleteTask 
} from "../controllers/tasksContraoller.js"; // Importação corrigida e com extensão .js

const router = express.Router();

router.post("/createTask", createTask);
router.get("/getTasks", getTasks);
router.get("/getTaskById/:id", getTaskById);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

export default router; // Exportação no formato ES Modules
