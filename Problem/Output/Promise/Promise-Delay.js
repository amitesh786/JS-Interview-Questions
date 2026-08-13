// 2. What will be logged in this delayed Promise?

console.log("A");

setTimeout(() => console.log("B"), 0);

const promise = new Promise((resolve) => {
  console.log("C");
  resolve();
});

promise.then(() => console.log("D"));

console.log("E");

// Answer

// A
// C
// E
// D
// B

// Explanation:

// "A" and "C" are synchronous.
// "E" is synchronous.
// .then(() => console.log("D")) is microtask, so it runs before "B", which is in the macrotask queue
