// 5. How does error propagation work in Promises?

Promise.resolve("Success")
  .then((res) => {
    console.log(res);
    throw new Error("Oops!");
  })
  .then(() => console.log("Next Step"))
  .catch((err) => console.log("Caught:", err.message))
  .then(() => console.log("After Catch"));

//   Answer
// Success
// Caught: Oops!
// After Catch

// Explanation:

// "Success" is logged first.
// The throw moves directly to .catch().
// The .then() after .catch() still executes.
