// Car is a constructor function.
function Car() {}
// In JavaScript, functions have a special property called prototype, 
// which is used to set up prototype inheritance for objects created by that function.

const tesla = new Car();

// When new Car() is called:
// A new object is created.
// That new object’s internal [[Prototype]] (proto) is set to Car.prototype.
// Car function runs, initializing the object.
console.log(tesla.__proto__ === Car.prototype); // true

console.log(Car.prototype.isPrototypeOf(tesla)); // true

// The method isPrototypeOf() checks whether Car.prototype is in the prototype chain of tesla.
// Since tesla was created using new Car(), its prototype (__proto__) is Car.prototype.
// Hence, Car.prototype.isPrototypeOf(tesla) returns true.

console.log(Object.prototype.isPrototypeOf(Car.prototype)); // true

console.log(Car.prototype.__proto__ === Object.prototype); // true

// Car.prototype itself is an object.
// All objects in JavaScript (except Object.prototype itself) inherit from Object.prototype.
// So, Car.prototype.__proto__ === Object.prototype is true.
// That means Object.prototype is in the prototype chain of Car.prototype, 
// so Object.prototype.isPrototypeOf(Car.prototype) returns true.

// isPrototypeOf() checks if an object exists in another's prototype chain.
