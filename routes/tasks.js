const express = require('express');
const router = express.Router();

/* ------------------------
   GET /tasks (Return 5 tasks)
------------------------- */
router.get('/tasks', (req, res) => {
  const tasks = req.app.locals.tasks;

  res.status(200).json({
    success: true,
    data: tasks
  });
});

/* ------------------------
   GET /task/:id (Return task by ID)
------------------------- */
router.get('/task/:id', (req, res) => {
  const id = req.params.id;

  // Invalid ID check:
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid ID format"
    });
  }

  const tasks = req.app.locals.tasks;
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

module.exports = router;
