// You have an array of employees, and you need to filter out 
// employees who are eligible for a promotion based on these conditions:

// Age must be 30 or above.
// Experience must be 5 years or more.
// Department must be "Engineering".

// Performance-Optimized filter()

const employees = [
    { name: "Alice", age: 28, experience: 6, department: "Engineering" },
    { name: "Bob", age: 35, experience: 10, department: "Engineering" },
    { name: "Charlie", age: 32, experience: 4, department: "Marketing" },
    { name: "Eve", age: 40, experience: 15, department: "HR" }
];

// const eligibleForPromotion = employees.filter(emp => 
//     emp.age >= 30 && emp.experience >= 5 && emp.department === "Engineering"
// );

const eligibleForPromotion = employees.filter(emp => 
    emp.department === "Engineering" && emp.age >= 30 && emp.experience >= 5
);

console.log(eligibleForPromotion);

/*
Output:
[
    { name: "Bob", age: 35, experience: 10, department: "Engineering" },
    { name: "David", age: 30, experience: 7, department: "Engineering" }
]
*/

// Explanation:

// We use .filter() to check three conditions:
// emp.age >= 30
// emp.experience >= 5
// emp.department === "Engineering"
// Only employees who meet all three conditions are included in the result.

// Bonus question:
// What if the filter conditions change dynamically? 
// Let’s say a user selects a minimum age and experience from a form.

// function filterEmployees(minAge, minExperience, department) {
//     return employees.filter(emp => 
//         emp.age >= minAge && emp.experience >= minExperience && emp.department === department
//     );
// }

// // Example Usage:
// console.log(filterEmployees(30, 5, "Engineering"));