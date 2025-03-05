// Callbacks vs Promises vs Async/Await

// asynchronous operations handle tasks like API calls,
// file reading, or timers without blocking execution.

// Callbacks (Oldest, but can get messy)

// A function is passed as an argument and executed after a task completes.
// Kind of a Problem: Leads to "callback hell" (deeply nested callbacks).

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}
fetchData(console.log);

// Promises (More structured, avoids nesting)

// Represents a value that might be available in the future (.then(), .catch()).
// Helps flatten code structure.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}
fetchData().then(console.log);

// Async/Await (Cleanest & most readable)

// Built on Promises but looks synchronous.
// Uses async for functions and await for handling resolved values.

async function fetchData() {
    return "Data received";
}
async function main() {
    console.log(await fetchData());
}
main();

// Which one to use?

// Callbacks for simple cases (not recommended for complex flows).
// Promises for better readability & error handling.
// Async/Await for the cleanest, most maintainable code.
