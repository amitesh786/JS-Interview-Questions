// Destructuring allows us to unpack values from arrays or objects into 
// separate variables in a concise and readable way.

// Object Destructuring

// Basic Object Destructuring
const person = { name: "Amitesh", age: 34 };
const { name, age } = person;
console.log(name); // Amitesh
console.log(age); // 34
// Extracts values based on property names (unlike arrays, which use positions).

// Renaming Variables
const person = { name: "Amitesh", age: 34 };
const { name: fullName, age: userAge } = person;
console.log(fullName); // Amitesh
console.log(userAge); // 34
// name is stored as fullName, age as userAge.

// Default Values
const person = { name: "Amitesh" };
const { name, age = 34 } = person;
console.log(name); // Amitesh
console.log(age); // 34 (Default value applied)
// If age is missing in person, it defaults to 34.

// Using Rest Operator (...)
const user = { name: "Amitesh", age: 34, country: "Italy" };
const { name, ...rest } = user;
console.log(name); // Amitesh
console.log(rest); // { age: 34, country: "Italy" }
// ...rest collects the remaining properties into an object.

// Nested Object Destructuring
const person = { 
    name: "Amitesh", 
    address: { city: "Milan", zip: 20100 } 
};
const { name, address: { city, zip } } = person;
console.log(name); // Amitesh
console.log(city); // Milan
console.log(zip); // 20100
// Extracts nested properties.

// Function Parameter Destructuring
function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}
const user = { name: "Amitesh", age: 34 };
greet(user); // Hello Amitesh, you are 34 years old.
// Directly destructures an object in function parameters.
