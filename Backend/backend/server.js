const express = require('express');
const cors = require('cors');
const db = require('./db');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
