// 5. Filter Unique Values from an Array

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter(
  (num, index, arr) => arr.indexOf(num) === index
);

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Explanation: Keeps only the first occurrence of each number by checking the index.
