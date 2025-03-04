import React, { useState } from "react";
import axios from "axios";

const UpdateTask = ({ task, onTaskUpdated }) => {

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/tasks/updateTask/${task._id}`, { 
        title,
        description
      })
        .then(response => {
          console.log("Resposta do servidor:", response.data);
          if (onTaskUpdated) {
                  onTaskUpdated(response.data);
                }
                setEditMode(false);
        })
        .catch(error => {
          console.error("Erro ao atualizar tarefa:", error);
        });
      

  };
    if (editMode) {
      // Retorna apenas o formulário, sem div
      return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input 
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancelar</button>
        </form>
      );
    } else {
      // Retorna apenas o botão, sem div
      return (
        <button onClick={() => setEditMode(true)}>Editar</button>
      );
    }
  
};

export default UpdateTask;
