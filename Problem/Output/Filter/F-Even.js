// 1. Filter Even Numbers from an Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Explanation: This filters numbers that are divisible by 2 (i.e., even).
