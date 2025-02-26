let tasks = [];

export function createTask(req, res) {
  if (!req.body.title) {
    return res.status(400).json({ error: "The title are required." });
  }

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description || "",
    completed: false,
  };
  tasks.push(newTask);
  return res.status(201).json(newTask);
}

export function getTasks(req, res) {
  return res.json(tasks);
}

export function getTaskById(req, res) {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  return res.json(task);
}

export function updateTask(req, res) {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;

  return res.json(task);
}

export function deleteTask(req, res) {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));

  return res.status(204).send();
}
