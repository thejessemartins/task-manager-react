// src/components/TaskStats.js
import React from 'react';

const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="alert alert-info text-center">
      <p>
        Total de Tarefas: <strong>{total}</strong>
      </p>
      <p>
        Concluídas: <strong>{completed}</strong>
      </p>
      <p>
        Pendentes: <strong>{pending}</strong>
      </p>
    </div>
  );
};

export default TaskStats;