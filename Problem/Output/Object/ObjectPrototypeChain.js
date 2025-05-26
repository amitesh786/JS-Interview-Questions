//  How can you check if one object is the prototype of another?

// You can use Object.prototype.isPrototypeOf() or Object.getPrototypeOf():

const animal = { species: "Mammal" };
const dog = Object.create(animal);

console.log(animal.isPrototypeOf(dog)); // ✅ true
console.log(Object.getPrototypeOf(dog) === animal); // ✅ true

// isPrototypeOf() checks if an object exists anywhere in the prototype chain.
// getPrototypeOf(obj) === prototype checks if the direct prototype matches.
