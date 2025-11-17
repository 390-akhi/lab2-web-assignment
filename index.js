const express = require('express');
const taskRouter = require('./src/routes/tasks');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory task list
const tasks = [
  { id: 1, title: "Learn Express", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Practice Node.js", completed: true, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Build REST API", completed: false, priority: "high", createdAt: new Date() },
  { id: 4, title: "Read Documentation", completed: false, priority: "low", createdAt: new Date() },
  { id: 5, title: "Test API using Postman", completed: true, priority: "medium", createdAt: new Date() }
];

app.locals.tasks = tasks;

/* ------------------------
   HEALTH CHECK ROUTE
------------------------- */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Mounting task routes
app.use('/', taskRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
