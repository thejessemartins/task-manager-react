// src/App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import PriorityFilter from './components/PriorityFilter';
import StatusFilter from './components/StatusFilter';
import SearchBar from './components/SearchBar';
import TaskStats from './components/TaskStats';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      { id: Date.now(), ...newTask, completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    (!filterCategory || task.category === filterCategory) &&
    (!filterPriority || task.priority === filterPriority) &&
    (!filterStatus ||
      (filterStatus === 'completed' && task.completed) ||
      (filterStatus === 'pending' && !task.completed)) &&
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === 'priority') {
      return a.priority.localeCompare(b.priority);
    }
    if (sortOrder === 'date') {
      return b.id - a.id; // Mais recentes primeiro
    }
    return 0;
  });

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Tarefas</h1>
      
      <SearchBar onSearch={setSearchQuery} />
      <TaskForm addTask={addTask} />
      <div className="row">
        <div className="col-md-4">
          <CategoryFilter
            categories={['Trabalho', 'Estudo', 'Pessoal']}
            onFilter={setFilterCategory}
          />
        </div>
        <div className="col-md-4">
          <PriorityFilter
            priorities={['Alta', 'Media', 'Baixa']}
            onFilter={setFilterPriority}
          />
        </div>
        <div className="col-md-4">
          <StatusFilter onFilter={setFilterStatus} />
        </div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <button
          onClick={() => setSortOrder('priority')}
          className="btn btn-secondary"
        >
          Ordenar por Prioridade
        </button>
        <button
          onClick={() => setSortOrder('date')}
          className="btn btn-secondary"
        >
          Ordenar por Data
        </button>
      </div>
      <TaskList
        tasks={sortedTasks}
        onDelete={deleteTask}
        onComplete={completeTask}
        onEdit={editTask}
      />
      {/* <TaskStats tasks={tasks} /> */}
    </div>
  );
}

export default App;