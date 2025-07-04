import React from 'react';
import axios from 'axios';

function TaskList({ tasks, onUpdate }) {

  const toggleComplete = async (task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task.id}`, {
      ...task,
      completed: task.completed ? 0 : 1,
    });
    onUpdate();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    onUpdate(); // refresh tasks from DB
  };

  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {Boolean(task.completed) && <span className="check-icon">✅ </span>}

            {task.title} ({task.category || "No category"}) – {task.deadline}
          </span>
          <button onClick={() => toggleComplete(task)}>
            {task.completed ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
