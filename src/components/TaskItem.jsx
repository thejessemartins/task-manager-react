// src/components/TaskItem.js
import React, { useState } from 'react';
import { FaTrash, FaCheckCircle, FaEdit } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    setIsEditing(false);
    onEdit(task.id, editedTask);
  };

  if (isEditing) {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, title: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <select
                value={editedTask.category}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, category: e.target.value })
                }
                className="form-select"
              >
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                value={editedTask.priority}
                onChange={(e) =>
                  setEditedTask({ ...editedTask, priority: e.target.value })
                }
                className="form-select"
              >
                <option value="">Selecione a prioridade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>
            <button onClick={handleSave} className="btn btn-primary me-2">
              Salvar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5
            className={`card-title ${
              task.completed ? 'text-decoration-line-through text-muted' : ''
            }`}
          >
            {task.title}
          </h5>
          <p className="card-text">
            Categoria: {task.category}, Prioridade: {task.priority}
          </p>
        </div>
        <div>
          <button
            onClick={() => onComplete(task.id)}
            className="btn btn-success me-2"
            disabled={task.completed}
            title={task.completed ? 'Já concluída' : 'Marcar como concluída'}
          >
            <FaCheckCircle />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-warning me-2"
          >
            <FaEdit />
          </button>
          <button onClick={() => onDelete(task.id)} className="btn btn-danger">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;