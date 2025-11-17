// 8. How to run multiple Promises in parallel?

const p1 = new Promise((res) => setTimeout(() => res("2"), 2000));
const p2 = new Promise((res) => setTimeout(() => res("1"), 1000));

Promise.all([p1, p2]).then(console.log);

// Answer
// ["2", "1"]

// Explanation
// Both Promises run simultaneously.
// Output is in the same order as the array.
