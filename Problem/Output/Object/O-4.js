// Can you modify an object’s prototype after creation? If so, how?

// Yes, you can modify an object’s prototype after creation using Object.setPrototypeOf(). However, this is not recommended for performance reasons.

const obj = { name: "Alice" };
console.log(Object.getPrototypeOf(obj)); // Output: Object.prototype

const newProto = { greet() { console.log("Hello!"); } };
Object.setPrototypeOf(obj, newProto);

obj.greet(); // Output: Hello!

// Better Alternative:
// Instead of modifying an object’s prototype dynamically, it’s better to define the prototype at the time of object creation using Object.create().
