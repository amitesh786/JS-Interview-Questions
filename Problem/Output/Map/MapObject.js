// 2. Extract Names from an Array of Objects

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

