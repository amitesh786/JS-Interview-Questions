// Output

console.log(isNaN(undefined));
console.log(isNaN(null));

console.log(isNaN(true));
console.log(isNaN(false));

console.log(isNaN(undefined));
// Output: true

// Explanation:
// isNaN(undefined)	true	undefined converts to NaN, which is not a valid number.

console.log(isNaN(null));
// Output: false

// Explanation:
// isNaN(null)	false	null converts to 0, which is a valid number.

console.log(isNaN(true));
// Output: false

// Explanation:
// isNaN(true)	false	true converts to 1, which is a valid number.

console.log(isNaN(false));
// Output: false

// Explanation:
// isNaN(false)	false	false converts to 0, which is a valid number.
