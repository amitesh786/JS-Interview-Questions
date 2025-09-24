let count = 0;
const increment = () => {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
};

increment();

// Output 
// 1
// 0

// Explanation:
// Scope of let

// let count = 0; is a global variable.
// Inside the if block, let count = 1; declares a new count variable with block scope.
// This creates a separate count inside the if block, shadowing the global count.

// Step-by-step Execution:

// if (count === 0) { → The global count (0) makes the condition true.
// Inside the if block, let count = 1; creates a new count within the block.
// console.log(count); inside the if block prints 1 (the block-scoped count).
// The if block ends, and we try console.log(count); outside the block.
// However, outside the if block, count refers to the global variable (0), not 1!.
