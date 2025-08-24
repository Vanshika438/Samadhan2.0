// highestMarks.js
function findHighestMarks(marks) {
  let highest = marks[0]; // assume first is highest

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  return highest;
}

const studentMarks = [78, 92, 85, 69, 95, 88];
console.log("Highest Marks:", findHighestMarks(studentMarks));
