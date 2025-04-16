// 2. Filter Out Users Above a Certain Age

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

// Explanation: Filters only users who are 18 or older.
