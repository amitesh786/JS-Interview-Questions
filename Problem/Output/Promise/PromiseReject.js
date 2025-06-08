// 3. What happens if a Promise is rejected but there is no .catch()?

new Promise((resolve, reject) => {
    reject("Error occurred");
});
console.log("After Promise");

// Answer:

// "After Promise" will be logged, but an UnhandledPromiseRejectionWarning will be thrown.
// Fix:
// Always handle errors with .catch():

new Promise((resolve, reject) => {
    reject("Error occurred");
  })
.catch((err) => console.log(err));
