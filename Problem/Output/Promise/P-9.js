// 9. How to handle partially failing Promises?

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failure");
const p3 = Promise.resolve("Another Success");

Promise.allSettled([p1, p2, p3]).then(console.log);

// Answer

[
    { status: "fulfilled", value: "Success" },
    { status: "rejected", reason: "Failure" },
    { status: "fulfilled", value: "Another Success" }
]
  
// Explanation:

// Unlike Promise.all(), Promise.allSettled() returns results of all Promises, even if some fail.

