// The spread operator (...) is a powerful feature in JavaScript used to expand elements of an array or properties of an object.
// Used to copy or merge objects.

// Copying an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Creates a shallow copy
console.log(obj2); // { a: 1, b: 2 }

// Why use it?
// Instead of Object.assign({}, obj1), this provides a cleaner way to copy an object.

// Merging objects
const obj3 = { a: 1, b: 2 };
const obj4 = { b: 5, c: 3 };
const merged = { ...obj3, ...obj4 };
console.log(merged); // { a: 1, b: 5, c: 3 }

// Key takeaway:
// If properties overlap (e.g., b), the last object's property (obj2.b = 5) overwrites the earlier one (obj1.b = 2).

// Adding properties while copying
const obj = { name: "Alice", age: 25 };
const updatedObj = { ...obj, age: 26, city: "New York" };
console.log(updatedObj); // { name: "Alice", age: 26, city: "New York" }

// Why use it?
// It's an easy way to create updated copies without modifying the original object.

// Object Spread (...)

// Used for copying, merging, and updating object properties.
// Example: { ...obj1, key: "value" }