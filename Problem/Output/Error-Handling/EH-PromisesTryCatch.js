// What is the difference between try...catch and .catch() in Promises?

// try...catch is used for synchronous errors.
// .catch() is used for handling errors in asynchronous operations (e.g., Promises).

// Synchronous error handling with try...catch
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Caught an error:", error.message);
}

// Asynchronous error handling with .catch()
fetch("https://invalid.url")
  .then(response => response.json())
  .catch(error => console.log("Fetch error:", error.message));
