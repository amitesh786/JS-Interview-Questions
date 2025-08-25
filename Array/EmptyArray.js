console.log(new Array(1,2)); // [1, 2]

console.log(Array(2)); // [empty × 2]

// or
// console.log(new Array(2));

console.log(new Array(2).fill()); // [undefined, undefined]

console.log(new Array(2).fill(0)); // [0, 0]

// Explanation
// When new Array() is called with multiple arguments, 
// it creates an array containing those arguments as elements.
// Here, new Array(1, 2) creates an array with elements [1, 2].

// When Array(2) (or new Array(2)) is called with a single numeric argument, 
// it creates an array of length 2, but the slots remain empty.

// new Array(2) creates an array with 2 empty slots.
// .fill() without arguments fills the array with undefined.

// new Array(2) creates an array of length 2 with empty slots.
// .fill(0) fills all slots with 0.
