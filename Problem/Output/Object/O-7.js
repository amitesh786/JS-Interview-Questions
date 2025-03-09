// What are the performance implications of using Object.setPrototypeOf()?

// Object.setPrototypeOf() is slow because changing an object's prototype at runtime breaks JavaScript engine optimizations.

// Why is it slow?
// JavaScript engines (V8, SpiderMonkey, etc.) optimize objects based on a fixed prototype chain.
// Changing the prototype forces the engine to re-optimize the object, making property lookups slower.

const obj = { a: 1 };
const newProto = { b: 2 };

console.time("SetPrototype");
Object.setPrototypeOf(obj, newProto);
console.timeEnd("SetPrototype"); // Slower than creating an object directly

// Alternative: 
// Instead of modifying the prototype dynamically, define it at creation using Object.create().
