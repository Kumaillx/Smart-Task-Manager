import React from 'react';
import axios from 'axios';

function TaskList({ tasks, onUpdate, onEdit }) {
  const toggleComplete = async (task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task.id}`, {
      ...task,
      completed: task.completed ? 0 : 1,
    });
    onUpdate();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    onUpdate();
  };

  const getDeadlineStatus = (deadline) => {
    const today = new Date().toISOString().split('T')[0];
    if (deadline === today) return 'Due Today';
    if (deadline < today) return 'Overdue';
    return null;
  };

  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => {
        const status = getDeadlineStatus(task.deadline);
        return (
          <li key={task.id} className="task-item">
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {Boolean(task.completed) && <span className="check-icon">✅ </span>}
              {status && (
                <span className={`deadline-badge ${status.replace(' ', '').toLowerCase()}`}>
                  {status}
                </span>
              )}
              {task.title} ({task.category || "No category"}) – {task.deadline}
            </span>
            <button onClick={() => toggleComplete(task)}>
              {task.completed ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => onEdit(task)} className="edit-btn">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
