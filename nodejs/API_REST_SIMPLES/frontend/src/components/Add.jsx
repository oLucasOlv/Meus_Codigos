import axios from "axios";
import React, { useState } from "react";

const AddTask = (onTaskAdded) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // api
    axios
      .post("http://localhost:8080/tasks/createTask", { title, description })
      .then((response) => {
        if (onTaskAdded) {
          onTaskAdded(response.data);
        }
        setTitle("");
        setDescription("");
      })
      .catch(error => {
        console.log("Nova Tarefa: ", error)
        
      })

  };
  return (
    <div className="header-section">
    <h2 className="header-title">Adicionar Tarefa</h2>
    <form className="form-task" onSubmit={handleSubmit}>
      <div className="input-group">
        <input 
          className="input-field"
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div className="input-group">
        <input 
          className="input-field"
          type="text" 
          placeholder="Descrição" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <button className="btn-submit" type="submit">Adicionar</button>
    </form>
  </div>
  )
};
export default AddTask;
