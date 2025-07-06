import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskForm({ onAdd, taskToEdit, setTaskToEdit }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setCategory(taskToEdit.category);
      setDeadline(taskToEdit.deadline);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (taskToEdit) {
      await axios.put(`http://localhost:5000/api/tasks/${taskToEdit.id}`, {
        ...taskToEdit,
        title,
        category,
        deadline,
      });
      setTaskToEdit(null);
    } else {
      await axios.post('http://localhost:5000/api/tasks', {
        title,
        category,
        deadline,
      });
    }

    setTitle('');
    setCategory('');
    setDeadline('');
    setSuccess(true);
    onAdd();

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
      {success && (
        <div className="success-msg">
          {taskToEdit ? '✅ Task Updated!' : '✅ Task Added!'}
        </div>
      )}
    </form>
  );
}

export default TaskForm;
