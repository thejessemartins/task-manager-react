// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: '', category: '', priority: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.category || !task.priority) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    setError('');
    addTask(task);
    setTask({ title: '', category: '', priority: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 shadow p-4 rounded">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label className="form-label">Título da Tarefa</label>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoria</label>
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
        <label className="form-label">Prioridade</label>
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="form-select"
        >
          <option value="">Selecione a prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Media">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;