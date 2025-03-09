// What is Object.setPrototypeOf() used for?

// The Object.setPrototypeOf(obj, proto) method sets the prototype of obj to proto. This allows you to change an object’s prototype after it has been created.

const animal = { sound: "Generic sound" };
const dog = { bark: function() { console.log("Woof!"); } };

Object.setPrototypeOf(dog, animal);

console.log(dog.sound); // Output: Generic sound (inherited from animal)
dog.bark();             // Output: Woof!

// Note: Using Object.setPrototypeOf() is not recommended for performance reasons, as modifying an object's prototype dynamically can slow down JavaScript engines.

