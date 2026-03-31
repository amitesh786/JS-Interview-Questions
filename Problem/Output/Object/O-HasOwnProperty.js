// What happens when you pass null as the prototype in Object.create(null)?

// If you pass null to Object.create(null), the new object will have no prototype,
// meaning it won’t inherit from Object.prototype.

// Implications:
// No default object methods (toString(), hasOwnProperty(), etc.).
// Good for pure dictionary-like objects (avoiding prototype pollution).

const obj = Object.create(null);

console.log(obj.toString); // Output: undefined
console.log(obj.hasOwnProperty); // Output: undefined

// Use case: Creating a dictionary object
obj.key = "value";
console.log(obj.key); // Output: value

// Use Case: If you don’t want unexpected property lookups (e.g., hasOwnProperty),
// Object.create(null) is useful.
