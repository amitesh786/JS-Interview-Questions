// Output
console.log(typeof undefined);
console.log(typeof null);

// console.log(typeof undefined);
// Output: "undefined"

// Explanation: 
// The typeof operator returns "undefined" when applied to undefined, since undefined is a primitive type in JavaScript.

// console.log(typeof null);
// Output: "object"

// Explanation: 
// The typeof operator incorrectly returns "object"
// for null due to a legacy bug in the early versions of JavaScript.
// null is actually a primitive value, not an object.
