// Array Destructuring in Function Parameters

// Question: What will be the output?

function sum([a, b]) {
    return a + b;
  }
  console.log(sum([3, 7]));
  console.log(sum([]));

// Answer:

// 10
// Error! Undefined values cause NaN (Not a Number)
  
// Fix: Use default values:
function sum([a = 0, b = 0] = []) {
    return a + b;
  }
console.log(sum([])); // 0
console.log(sum([5])); // 5
