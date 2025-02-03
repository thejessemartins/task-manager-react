// src/components/TaskItem.js
import React from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5
            className={`card-title ${task.completed ? 'text-decoration-line-through' : ''}`}
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
          >
            <FaCheckCircle />
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