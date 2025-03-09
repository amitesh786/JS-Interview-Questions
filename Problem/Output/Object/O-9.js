//  Can you use Object.setPrototypeOf() on an object created with Object.create(null)? Why or why not?

// Yes, you can use Object.setPrototypeOf() on an object created with Object.create(null), but the object won’t initially inherit from Object.prototype.

const obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // Output: null

// Setting a prototype later
const proto = { greet() { console.log("Hello!"); } };
Object.setPrototypeOf(obj, proto);

obj.greet(); // Output: Hello!

// Why is this useful?
// You can start with a null-prototype object and later assign a prototype if needed.
// However, this approach is less efficient than creating an object with the prototype from the start (Object.create(proto)).
