// Question: Implement a function that checks if an input is a string using type guards.

function isString(value: unknown): value is string {
    return typeof value === "string";
}

// Example usage
console.log(isString("Hello")); // Output: true
console.log(isString(123)); // Output: false
