// 1. Array of numbers and returns the sum of all the numbers.

const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Example usage:
console.log(sumArray(numbers)); // Output: 15

// reduce() iterates over each element of the array and accumulates a result.
// (acc, num) => acc + num: This is a callback function where:
// acc (accumulator) stores the ongoing sum.

// num represents the current number being processed in the array.
// 0 is the initial value of acc (accumulator).
