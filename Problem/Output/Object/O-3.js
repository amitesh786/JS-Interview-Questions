// How do Object.create() and Object.setPrototypeOf() differ in setting the prototype of an object?

// Object.create(proto) creates a new object with proto as its prototype.
// Object.setPrototypeOf(obj, proto) modifies an existing object’s prototype

const proto = { hello: "world" };

// Using Object.create()
const obj1 = Object.create(proto);
console.log(obj1.hello); // Output: world

// Using Object.setPrototypeOf()
const obj2 = {};
Object.setPrototypeOf(obj2, proto);
console.log(obj2.hello); // Output: world

// Key Difference:
// Object.create() is preferred when creating a new object with a specified prototype, while Object.setPrototypeOf() is used to modify an existing object’s prototype.

