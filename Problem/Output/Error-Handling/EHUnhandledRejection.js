// Unhandled Rejection Warning (In Modern Browsers & Node.js)
// If a Promise rejects and there’s no .catch(), the error propagates as an unhandled promise rejection.

Promise.reject(new Error("Something went wrong!"));

// No .catch() → UnhandledPromiseRejectionWarning in Node.js

// Output (in Node.js):

// (node:1234) UnhandledPromiseRejectionWarning: Error: Something went wrong!
// (node:1234) DeprecationWarning: Unhandled promise rejections are deprecated.

// In modern Node.js versions, unhandled rejections terminate the process unless handled.
