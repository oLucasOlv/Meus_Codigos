import Task from "../models/task.js"; 

export async function createTask(req, res) {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "The title is required." });
    }

    const newTask = await Task.create({
      title,
      description: description || "",
      completed: false,
    });

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find(); // Obtém todas as tarefas do banco
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

export async function getTaskById(req, res) {
  try {
    const task = await Task.findById(req.params.id); // Busca pelo ID no banco
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

export async function updateTask(req, res) {
  try {
    const { title, description, completed } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true } // Retorna a task atualizada
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(204).send(); // 204 indica sucesso sem conteúdo
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}
