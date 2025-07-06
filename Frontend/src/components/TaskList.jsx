
import axios from 'axios';

function TaskList({ tasks, onUpdate, onEdit }) {
  // Toggles a task’s completion status (completed or not).
  const toggleComplete = async (task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task.id}`, {
      ...task,
      completed: task.completed ? 0 : 1,
    });
    onUpdate();
  };

  const deleteTask = async (id) => {
    //Delets a specific task by its ID.
    // Sends a DELETE request to the server to remove the task.
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    onUpdate();
  };

  const getDeadlineStatus = (deadline) => {
    //Gets today’s date YYYY-MM-DD format 
    const today = new Date().toISOString().split('T')[0];
    if (deadline === today) return 'Due Today';
    if (deadline < today) return 'Overdue';
    return null;
  };

  if (tasks.length === 0) 
    {
      return <p>No tasks to show.</p>;
    }

  return (
    <ul>

      {tasks.map((task) => {
        const status = getDeadlineStatus(task.deadline);
        
        return (
          // Creats a list item for each task with its details.
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
