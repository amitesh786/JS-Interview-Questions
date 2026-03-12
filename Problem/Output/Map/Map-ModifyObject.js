// 6. Modify an Array of Objects Conditionally
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 95 }
];

const updatedStudents = students.map(student => ({
    ...student,
    passed: student.score >= 70
}));

console.log(updatedStudents);
// [
//   { name: 'Alice', score: 85, passed: true },
//   { name: 'Bob', score: 60, passed: false },
//   { name: 'Charlie', score: 95, passed: true }
// ]
