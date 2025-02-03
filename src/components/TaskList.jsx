// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="text-center text-muted">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
};

export default TaskList;