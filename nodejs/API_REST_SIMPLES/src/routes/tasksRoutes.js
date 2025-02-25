const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksContraoller");

router.post("/createTask", tasksController.createTask);
router.get("/getTasks", tasksController.getTasks);
router.get("/getTaskById/:id", tasksController.getTaskById);
router.put("/updateTask/:id", tasksController.updateTask);
router.delete("/deleteTask/:id", tasksController.deleteTask);

module.exports = router;
