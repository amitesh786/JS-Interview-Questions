// What will the following code output and why?

const obj = {};
Object.setPrototypeOf(obj, Array.prototype);
console.log(obj.length);

// Output -> undefined

// Explanation:
// Object.setPrototypeOf(obj, Array.prototype); makes obj inherit from Array.prototype.
// However, length is a property of actual arrays, and obj is not an array—it just has the prototype of an array.
// length is not automatically set for normal objects, so obj.length is undefined.

// Idea: 
// If you make obj an actual array:
const arr = [];
Object.setPrototypeOf(arr, Array.prototype);
console.log(arr.length); // Output: 0 (Arrays have a built-in length property)

