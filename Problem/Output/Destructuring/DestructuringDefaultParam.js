// Default Values in Function Parameter Destructuring

function userInfo({ name = "Amitesh", age = 33 }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
userInfo({ name: "Singh" });
userInfo({});
userInfo();

// Question: What will be printed?
// Output:

// "Name: Emma, Age: 30"
// "Name: John, Age: 30"
// Error! (Cannot destructure undefined)
// Fix: Provide a default empty object {} in function parameters:

function userInfo({ name = "John", age = 30 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}
userInfo(); // "Name: John, Age: 30"
