const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Temp data
let students = [];
let idCounter = 1;

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET student by id
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// CREATE new student
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  const newStudent = { id: idCounter++, name, age, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// UPDATE student
app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  const { name, age, course } = req.body;
  if (name) student.name = name;
  if (age) student.age = age;
  if (course) student.course = course;

  res.json(student);
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  const deleted = students.splice(index, 1);
  res.json({ message: "Student deleted", student: deleted[0] });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
