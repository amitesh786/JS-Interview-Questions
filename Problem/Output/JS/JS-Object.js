// Object using property to avoid errors

// Using if Condition (Safe Access)
const person = { name: "Amitesh" };

let name;
if (person && person.name) {
    name = person.name;
}
console.log("Name (if condition):", name);

// Using Optional Chaining (?.)

// let name = person?.name;
console.log("Name (optional chaining):", name);

// Using Object Destructuring

// let { name } = person || {};
console.log("Name (destructuring):", name);

// Using Default Value in Destructuring

// let { name = "Singh" } = person;
console.log("Name (default value in destructuring):", name);
