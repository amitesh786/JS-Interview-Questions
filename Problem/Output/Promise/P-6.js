// 6. What happens when return is missing in .then()?

Promise.resolve(1)
  .then((x) => {
    x + 1; // No return here
  })
  .then((x) => console.log(x));

// Answer
// undefined

// Fix:
// Always return a value:

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => console.log(x)); // Output: 2
