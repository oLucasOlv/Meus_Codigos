import React, { useState } from "react";
import axios from "axios";

const UpdateTask = ({ task, onTaskUpdated, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/tasks/updateTask/${task._id}`, {
        title,
        description,
      })
      .then((response) => {
        console.log("Resposta do servidor:", response.data);
        if (onTaskUpdated) {
          onTaskUpdated(response.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao atualizar tarefa:", error);
      });
  };

  return (
    
    <>
      <input
        type="text"
        className="task-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        className="task-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="task-buttons">
        <button type="submit" onClick={handleSubmit}>
          &#10004;
        </button>
        <button type="button" onClick={onCancel}>
          &#10006;
        </button>
      </div>
    </>
  );
};

export default UpdateTask;
