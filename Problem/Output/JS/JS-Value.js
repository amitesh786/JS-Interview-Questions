// Comparsion

const a = { valueOf: () => 5 };

console.log(a == 5) // true
console.log(a === 5) // false

console.log(a + 5) // 10
console.log(a > 1) // true

// JavaScript calls the valueOf() method to convert an object into a primitive value for evaluation.
// JavaScript automatically calls methods like valueOf() to convert the object into a primitive before evaluating the expression.

// ==: Performs type coercion and compares values after converting them to the same type.
// == (Loose Equality): Allows type coercion,
// meaning it converts objects to primitive values (via valueOf() or toString()).

// ===: Strictly compares values and types without any coercion.
// Object conversion: When performing operations like + or comparison (<, >, etc.),
