import React, { useState, useEffect } from "react";
import TaskList from "./components/List";
import AddTask from "./components/Add";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Busca as tarefas quando o app carrega
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks/getTasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar tarefas", error);
      });
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== deletedTaskId)
    );
  };

  return (
    <div className="App">
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList
        tasks={tasks}
        onTaskUpdated={handleTaskUpdated}
        onTaskDeleted={handleTaskDeleted}
      />
    </div>
  );
}

export default App;
