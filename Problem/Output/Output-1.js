
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

// Explanation:

// Output
// 1
// 4
// 3
// 2

// console.log(1); → Synchronous, prints 1 immediately.

// setTimeout(() => console.log(2), 0); → Asynchronous, gets added to the macrotask queue.

// Promise.resolve().then(() => console.log(3)); → Asynchronous, goes into the microtask queue.

// console.log(4); → Synchronous, prints 4 immediately.

// Event Loop Execution Order:

// Microtasks (Promises) execute before macrotasks (setTimeout).
// So, console.log(3); executes before console.log(2);.
