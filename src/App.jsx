// src/App.js
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredTasks = tasks.filter((task) =>
    (!filterCategory || task.category === filterCategory) &&
    (!filterPriority || task.priority === filterPriority) &&
    (!filterStatus ||
      (filterStatus === 'completed' && task.completed) ||
      (filterStatus === 'pending' && !task.completed))
  );

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container mt-5">
      {/* ... */}
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
        <div className="col-md-4">
          <StatusFilter onFilter={setFilterStatus} />
        </div>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
}

export default App;