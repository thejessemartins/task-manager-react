// src/components/TaskItem.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">
            Categoria: {task.category}, Prioridade: {task.priority}
          </p>
        </div>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;