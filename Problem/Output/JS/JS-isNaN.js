// Output

console.log(isNaN(undefined));
console.log(isNaN(null));

console.log(isNaN(true));
console.log(isNaN(false));

console.log(isNaN(undefined));
// Output: true

// Explanation:
// isNaN() checks if a value is Not-a-Number (NaN).
// undefined is not a valid number.
// When passed to isNaN(), undefined is internally converted to NaN, so isNaN(undefined) returns true.
// isNaN(undefined)	true	undefined converts to NaN, which is not a valid number.


console.log(isNaN(null));
// Output: false

// Explanation:
// null is first converted to a number before checking if it's NaN.
// Number(null) results in 0, which is a valid number.
// Since 0 is not NaN, isNaN(null) returns false.

// isNaN(null)	false	null converts to 0, which is a valid number.

console.log(isNaN(true));
// Output: false

// Explanation:
// true is converted to 1 when used in numeric operations.
// Number(true) === 1, which is a valid number.
// Since 1 is not NaN, isNaN(true) returns false.

// isNaN(true)	false	true converts to 1, which is a valid number.


console.log(isNaN(false));
// Output: false

// Explanation:
// false is converted to 0 when used in numeric operations.
// Number(false) === 0, which is a valid number.
// Since 0 is not NaN, isNaN(false) returns false.
// isNaN(false)	false	false converts to 0, which is a valid number.
