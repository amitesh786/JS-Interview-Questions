// Throwing Different Data Types
// throw can be used with any type of value, not just Error objects.

throw "Something went wrong!";    // String
throw 42;                         // Number
throw { message: "Error", code: 500 }; // Object

// Best Practice: Always throw Error objects (new Error()) 
// to preserve stack traces and debugging info.
