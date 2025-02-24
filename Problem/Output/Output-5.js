

console.log(typeof null);
console.log(null instanceof Object);
console.log([] + {});

// Output: 
// "object"
// false
// "[object Object]"

// Explanation:

// 1️⃣ console.log(typeof null);
// The typeof operator is supposed to return the type of a value.
// typeof null incorrectly returns "object".

// 2️⃣ console.log(null instanceof Object);
// The instanceof operator checks if an object is an instance of a specific class.
// null is not an object and does not inherit from Object, so:

// 3️⃣ console.log([] + {});
// The + operator:
// Converts both operands into strings when used with non-numeric objects.
// [] (empty array) converts to "" (empty string).
// {} (empty object) converts to "[object Object]".
// "" + "[object Object]" results in "[object Object]".

// Here is another code snippet.
// console.log({} + []);

