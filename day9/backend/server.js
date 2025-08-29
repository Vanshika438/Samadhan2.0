const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: "Aarav Sharma", age: 20, grade: "A" },
  { id: 2, name: "Priya Singh", age: 21, grade: "B+" },
  { id: 3, name: "Rahul Mehta", age: 19, grade: "A-" },
  { id: 4, name: "Isha Verma", age: 22, grade: "B" }
];

app.get("/api/students", (req, res) => {
  res.json({ students, count: students.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Students API running on http://localhost:${PORT}/`);
});
