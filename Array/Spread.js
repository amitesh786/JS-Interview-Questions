
// The spread operator (...) is a powerful feature in JavaScript used to expand elements of an array or properties of an object.

// Array Spread (...)
// Used to spread elements of an array into another array or function arguments.

// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a shallow copy
console.log(arr2); // [1, 2, 3]

// Why use it?
// Instead of arr2 = arr1 (which creates a reference), ...arr1 creates a new copy.

// Merging arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const merged = [...arr3, ...arr4];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Why use it?
// Instead of arr3.concat(arr4), the spread operator provides a cleaner way to merge arrays.

// Spreading in function arguments
function sum(a, b, c) {
    return a + b + c;
  }
  
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Why use it?
// Instead of manually passing numbers[0], numbers[1], numbers[2], you can spread the array into arguments.

// Array Spread (...)
// Used for copying, merging, and passing array elements as function arguments.
// Example: [...arr1, ...arr2]
