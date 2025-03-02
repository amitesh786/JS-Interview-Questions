// 4. What will be the output of multiple .then() calls?

const promise = new Promise((resolve) => resolve("First"));

promise
  .then((res) => {
    console.log(res);
    return "Second";
  })
  .then((res) => {
    console.log(res);
    return "Third";
  })
  .then(console.log);

// Answer
// First
// Second
// Third

// Explanation:
// Each .then() returns a new resolved Promise with the returned value.
