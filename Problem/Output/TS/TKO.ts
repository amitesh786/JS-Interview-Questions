// Question: Create a function that gets the value of an object using the keyof operator.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example usage
const person = { name: "John", age: 30 };
console.log(getProperty(person, "name")); // Output: "John"
console.log(getProperty(person, "age")); // Output: 30
