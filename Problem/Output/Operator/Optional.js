// What will be the output ?

let person = { name: { surname: "Singh" }};
console.log(person?.name?.surname?.test ?? "Amitesh");

// Explanation
// 1. Understanding the object, nested object
// let person = { name: { surname: "Amitesh" }};

// 2. Optional Chaining (?.)
// person?.name?.surname?.test

// 3.  Nullish Coalescing Operator (??)
// person?.name?.surname?.test ?? "Amitesh"
// If the left side is null or undefined, it returns the right side.

// Summary
// ?. (optional chaining) prevents errors when 
// accessing deeply nested properties.

// ?? (nullish coalescing) provides a fallback 
// if the value is null or undefined.

// Since person.name.surname is "Singh" (a string), 
// and "Singh".test is undefined, we fall back to "Amitesh".
