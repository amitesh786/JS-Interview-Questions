// How does the finally block work in try...catch?

// The finally block always executes, whether an error occurs or not.
// Useful for cleanup tasks like closing a connection or logging data.

function testFinally() {
  try {
    console.log("Try block executed");
    throw new Error("An error occurred");
  } catch (error) {
    console.log("Error caught:", error.message);
  } finally {
    console.log("Finally block always runs!");
  }
}

testFinally();

// Output

// Try block executed
// Error caught: An error occurred
// Finally block always runs!
