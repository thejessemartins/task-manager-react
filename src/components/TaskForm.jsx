// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', category: '', priority: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.category && task.priority) {
      addTask(task);
      setTask({ title: '', category: '', priority: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <select
          value={task.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
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
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="form-select"
        >
          <option value="">Selecione a prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;