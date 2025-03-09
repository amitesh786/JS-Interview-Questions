// Given the following code, what will be logged?

const proto = { greet: () => console.log("Hello") };
const obj = Object.create(proto);
obj.greet();

// Output -> Hello

// Explanation:
// obj is created with proto as its prototype.
// Since proto has a greet() method, 
// calling obj.greet() looks up the prototype chain and finds greet(), which logs "Hello".

