const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;

app.get("/", (req, res) => {
  res.send(`
    <h1>✅ Todo API Backend</h1>
    <p>Available endpoints:</p>
    <ul>
      <li>GET /api/tasks – Get all tasks</li>
      <li>POST /api/tasks – Add a task</li>
      <li>PUT /api/tasks/:id/complete – Mark task as complete</li>
      <li>DELETE /api/tasks/:id – Delete a task</li>
    </ul>
  `);
});

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add task
app.post("/api/tasks", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Task text required" });

  const newTask = { id: id++, text, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

// Mark complete
app.put("/api/tasks/:id/complete", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = true;
  res.json(task);
});

// Delete task
app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () =>
  console.log(`✅ Backend running on http://localhost:${PORT}`)
);
