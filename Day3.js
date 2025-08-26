const students = [
  { name: "Aman", marks: [80, 75, 90] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Rohit", marks: [70, 60, 65] }
];

// Calculate total & average for each student
students.forEach(student => {
  const total = student.marks.reduce((acc, m) => acc + m, 0);
  const average = total / student.marks.length;

  console.log(`${student.name} → Total: ${total}, Average: ${average.toFixed(2)}`);
});
