import React, { useState } from "react";
import DeleteTask from "./Delete";
import UpdateTask from "./Update";

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  return (
    <div className="task-list">
      <h1 className="task-list-title">Lista de Tarefas</h1>
      <div className="task-section-container">
        {tasks.map((task) => (
          <section className="task-section" key={task._id}>
            {editingTaskId === task._id ? (
              // Se estiver em modo de edição, mostra o componente de atualização (que exibe Salvar/Cancelar)
              <UpdateTask
                task={task}
                onTaskUpdated={(updatedTask) => {
                  onTaskUpdated(updatedTask);
                  setEditingTaskId(null); // Sai do modo de edição ao salvar
                }}
                onCancel={() => setEditingTaskId(null)}
              />
            ) : (
              // Se não estiver editando, exibe os <p> e os botões Editar e Excluir
              <>
                <p className="task-text">{task.title}</p>
                <p className="task-description">{task.description}</p>
                <div className="task-buttons">
                  <button onClick={() => setEditingTaskId(task._id)}>
                    Editar
                  </button>
                  <DeleteTask
                    taskId={task._id}
                    onTaskDeleted={onTaskDeleted}
                  />
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
