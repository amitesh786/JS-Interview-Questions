// 2. An array of objects with {name, age} and returns the sum of all ages.

// Example usage:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const sumAges = (people) => people.reduce((acc, person) => acc + person.age, 0);
console.log(sumAges(people)); // Output: 90
