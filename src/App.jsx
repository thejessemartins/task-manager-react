// src/App.js
function App() {
  const [tasks, setTasks] = useState([]);

  // ...

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mt-5">
      {/* ... */}
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  );
}

export default App;