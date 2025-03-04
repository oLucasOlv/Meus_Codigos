import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteTask from "./Delete";
import UpdateTask from "./Update";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks/getTasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar tarefas ", error);
      });
  });

  const handleTaskDeleted = (deletedTaskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== deletedTaskId)
    );
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
  };

  return (
    <div className="task-list">
      <h1 className="task-list-title">Lista de Tarefas</h1>
      {tasks.map((task) => (
        <section className="task-section" key={task._id}>
          <p className="task-text">{task.title}</p>
          <p className="task-description">{task.description}</p>
          <div className="task-buttons">

            <UpdateTask task={task} onTaskUpdated={handleTaskUpdated} />
            
            <DeleteTask taskId={task._id} onTaskDeleted={handleTaskDeleted} />

          </div>
        </section>
      ))}
    </div>
  );
};

export default TaskList;
