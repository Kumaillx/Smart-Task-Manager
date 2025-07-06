import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import Login from './components/Login';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser('');
    setTasks([]);
    setTaskToEdit(null);
  };

  const categories = [...new Set(tasks.map(task => task.category).filter(Boolean))];

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🧠 Smart Task Manager</h1>
        <p className="subtitle">Welcome, {user}!</p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      <TaskForm onAdd={fetchTasks} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        deadlineFilter={deadlineFilter}
        setDeadlineFilter={setDeadlineFilter}
      />

      <TaskList tasks={tasks} onUpdate={fetchTasks} onEdit={setTaskToEdit} />

      <footer className="footer">
        <p>&copy; 2025 Jeeny Assessment – Made by Kumail 🚀</p>
      </footer>
    </div>
  );
}

export default App;
