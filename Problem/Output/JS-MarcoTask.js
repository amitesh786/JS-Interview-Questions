
console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
}).then(() => {
    console.log('D');
});

console.log('E');

// Explanation:

// Output
// A
// E
// C
// D
// B

// Execution:

// console.log('A'); → Synchronous, prints "A".

// setTimeout(..., 0); → Macrotask, gets added to the macrotask queue.

// Promise.resolve().then(...).then(...); → Microtasks, get added to the microtask queue.

// console.log('E'); → Synchronous, prints "E".

// Microtask Queue Executes First:
// console.log('C'); → From the first .then(), prints "C".
// console.log('D'); → From the second .then(), prints "D".

// Macrotask Executes Last:
// console.log('B'); → From setTimeout, prints "B".
// So, the execution order is:
// A → E → C → D → B

