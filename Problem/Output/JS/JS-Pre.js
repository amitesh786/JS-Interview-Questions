// Output

let count = 1;
console.log("Count Before:", count); // 1

let funct = (count++, count++, count => count + 1);

console.log("Count After :", count); // 3
console.log("Value Funct:", funct(count)); // 4

// Final Output:

// Count Before: 1
// Count After : 3
// Value Funct: 4

// let count = 1;

// let CountFn = (count++, count++, count => count + 1)(count);

// console.log("Function:", CountFn); // 4

