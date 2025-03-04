import React  from "react";
import axios from "axios";

const DeleteTask = ({ taskId, onTaskDeleted }) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/tasks/deleteTask/${taskId}`)
        .then(response => {
            console.log("Tarefa Deletada: ", response.data)
            if (onTaskDeleted) {
                onTaskDeleted(taskId)
            }
        })
        .catch(error => {
            console.error("Erro ao deletar tarefa: ", error)
        })
    }
    return (
        <button onClick={handleDelete} className="deleteButton">&#10006;</button>
    )

};

export default DeleteTask;
