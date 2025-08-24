// Shallow Copy

// A shallow copy of an object or array creates a new object or array but does not recursively copy nested objects.
// Instead, it copies references to those nested objects. 
// This means that if the original object or array contains other objects, the shallow copy will reference the same nested objects.

const obj1 = { a: 1, nested: { b: 2 } };
const obj2 = { ...obj1 };
obj2.nested.b = 4;

console.log(obj1.nested.b);
console.log(obj2.nested.b);

// Why does this happen?
// obj2 = { ...obj1 } only copies the top-level properties.
// nested: { b: 2 } is an object reference, so both obj1.nested and obj2.nested point to the same memory location.
// Changing obj2.nested.b also changes obj1.nested.b.

// Deep copy

// A deep copy creates a new object or array and recursively copies all objects and arrays it contains. 
// This means that nested objects will be copied as well, so the original
// and the copy do not share any references to the nested objects.

const obj4 = structuredClone(obj1); // Deep copy
obj4.nested.b = 15;

console.log(obj4.nested.b); // 15
console.log(obj1.nested.b); // 2 ✅ (Original remains unchanged)

const obj5 = JSON.parse(JSON.stringify(obj1)); // Deep copy
obj5.nested.b = 23;

console.log(obj5.nested.b); // 23
console.log(obj1.nested.b); // 2 ✅ (Original remains unchanged)
