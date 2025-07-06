import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null); // NEW

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      const today = new Date().toISOString().split('T')[0];
      const matchesCategory = selectedCategory ? task.category === selectedCategory : true;
      let matchesDeadline = true;

      if (deadlineFilter === 'today') matchesDeadline = task.deadline === today;
      else if (deadlineFilter === 'upcoming') matchesDeadline = task.deadline > today;
      else if (deadlineFilter === 'overdue') matchesDeadline = task.deadline < today;

      return matchesCategory && matchesDeadline;
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const categories = [...new Set(tasks.map(task => task.category).filter(Boolean))];

  return (
    <div className="container">
      <header className="header">
        <h1>🧠 Smart Task Manager</h1>
        <p className="subtitle">Organize, Prioritize, Conquer.</p>
      </header>

      <TaskForm onAdd={fetchTasks} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        deadlineFilter={deadlineFilter}
        setDeadlineFilter={setDeadlineFilter}
      />

      <TaskList tasks={getFilteredTasks()} onUpdate={fetchTasks} onEdit={setTaskToEdit} />

      <footer className="footer">
        <p>&copy; 2025 Jeeny Assessment – Made by Kumail 🚀</p>
      </footer>
    </div>
  );
}

export default App;
