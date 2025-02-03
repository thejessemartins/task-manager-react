// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import PriorityFilter from './components/PriorityFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPriority, setFilterPriority] = useState('');

  const addTask = (newTask) => {
    setTasks([
      ...tasks,
      { id: Date.now(), ...newTask },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (!filterCategory || task.category === filterCategory) &&
      (!filterPriority || task.priority === filterPriority)
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Tarefas</h1>
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
            priorities={['Alta', 'Média', 'Baixa']}
            onFilter={setFilterPriority}
          />
        </div>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;