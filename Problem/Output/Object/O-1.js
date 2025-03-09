// How does Object.create(null) differ from Object.create({})?

const obj1 = Object.create(null);
console.log(obj1.toString); // Output: undefined (no prototype)

const obj2 = Object.create({});
console.log(obj2.toString); // Output: [Function: toString] (inherited from Object.prototype)

// Object.create(null) creates an object with no prototype, meaning it does not inherit from Object.prototype.
// Object.create({}) creates an object with the given {} as its prototype, which still inherits from Object.prototype.

// Use Case:
// Object.create(null) is useful when you need a pure object, 
// such as a dictionary that doesn't inherit unwanted properties like toString from Object.prototype.
