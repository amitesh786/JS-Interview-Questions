// 1. What will be the output of this Promise?

console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve("Resolved Value");
});

promise.then((res) => console.log(res));

console.log("End");

// Answer

// Start
// Inside Promise
// End
// Resolved Value

// Explanation:

// Synchronous logs first ("Start", "Inside Promise", "End").
// .then() runs asynchronously, logging "Resolved Value" last.
