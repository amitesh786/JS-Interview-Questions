// Throwing a Custom Error

function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!"); // Custom error
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0)); // This will throw an error
  } catch (error) {
    console.log("Caught an error:", error.message);
  }

// Output

// Caught an error: Cannot divide by zero!

// Why use throw here?

// Prevents execution of invalid operations (e.g., division by zero).
// Allows for structured error handling instead of crashing the program.
