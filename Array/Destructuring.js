// Destructuring allows us to unpack values from arrays or objects into 
// separate variables in a concise and readable way.

// Array Destructuring

// Basic Array Destructuring

const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// The values from numbers are assigned to a, b, and c in order.

// Skipping Elements
const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30

// Skipping an element by using a comma (,) without a variable.

// Using Rest Operator (...)
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5] (Remaining values as an array)

// The ...rest operator collects remaining values into an array.

// Default Values
const arr = [10];
const [x, y = 20] = arr;

console.log(x); // 10
console.log(y); // 20 (Default value is used)

// If no value is present, a default value is used.

// Swapping Variables Using Destructuring
let x = 5, y = 10;
[x, y] = [y, x];

console.log(x); // 10
console.log(y); // 5

// No need for a temporary variable!
