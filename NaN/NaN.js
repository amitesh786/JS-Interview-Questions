// How can we accurately compare NaN values in JavaScript?

let a = NaN;
let b = NaN;

console.log(a == b); // false
console.log(a === b); // false

// Explanation:
// In JavaScript, NaN (Not-a-Number) is the only value that is not equal to itself.

console.log(isNaN(a) && isNaN(b)); // true, but can be misleading in some cases

// The best way to check for NaN is using Number.isNaN(), which does not coerce values.
console.log(Number.isNaN(a) && Number.isNaN(b)); // true, the recommended approach
