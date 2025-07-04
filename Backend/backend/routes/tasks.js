const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all tasks
router.get('/', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// Add task
router.post('/', (req, res) => {
  const { title, category, deadline } = req.body;
  db.run(
    'INSERT INTO tasks (title, category, deadline, completed) VALUES (?, ?, ?, 0)',
    [title, category, deadline],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});


// Update task
router.put('/:id', (req, res) => {
  const { title, category, deadline, completed } = req.body;
  db.run(
    'UPDATE tasks SET title=?, category=?, deadline=?, completed=? WHERE id=?',
    [title, category, deadline, completed, req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ updated: this.changes });
    }
  );
});

// Delete task
router.delete('/:id', (req, res) => {
  db.run('DELETE FROM tasks WHERE id=?', req.params.id, function (err) {
    if (err) return res.status(500).json(err);
    res.json({ deleted: this.changes });
  });
});

//Debug
router.post('/', (req, res) => {
  console.log('POST /api/tasks called with:', req.body); // 🔍
  const { title, category, deadline } = req.body;
});


module.exports = router;
