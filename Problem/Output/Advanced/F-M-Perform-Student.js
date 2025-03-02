// Challenge: Find Top Performing Students
// You have an array of students with names, scores, and attendance percentage.
// Your task is to:

// Filter students who scored 80 or more and have attendance of 75% or more.
// Map them to return an array of objects containing only name and score.

// Input Data
const students = [
    { name: "Alice", score: 85, attendance: 90 },
    { name: "Bob", score: 70, attendance: 80 },
    { name: "Charlie", score: 95, attendance: 60 },
    { name: "David", score: 88, attendance: 85 },
    { name: "Eve", score: 78, attendance: 95 }
];

// Expected Output
[
    { name: "Alice", score: 85 },
    { name: "David", score: 88 }
]

// Solution
const topStudents = students
    .filter(student => student.score >= 80 && student.attendance >= 75)
    .map(student => ({ name: student.name, score: student.score }));

console.log(topStudents);

// Explanation

// Filter step:
// Keep only students who scored 80+ and have attendance of 75%+.

// Map step:
// Extract only the name and score properties for a cleaner output.

// Bonus Challenge (Optional)
// Modify the function to sort the top students by score (highest to lowest).

// Hint: Use .sort((a, b) => b.score - a.score) after filtering and mapping.
