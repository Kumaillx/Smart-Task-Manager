import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await axios.post('http://localhost:5000/api/tasks', {
      title,
      category,
      deadline
    });

    setTitle('');
    setCategory('');
    setDeadline('');
    setSuccess(true);
    onAdd();

    // After 2 seconds text fades out
    setTimeout(() => setSuccess(false), 2000);
  };

  return (

    <form onSubmit={handleSubmit} className="task-form">
      
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
      
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      <button type="submit">Add Task</button>
      {success && <div className="success-msg">✅ Task Added!</div>}
      
    </form>
  );
}

export default TaskForm;
