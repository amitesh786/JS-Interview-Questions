// Question: What will be logged?

const p = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => resolve(2), 1000);
});

p.then((res) => console.log(res));
console.log(3);

// Answer
// 1
// 3
// 2

// Explanation:

// "1" logs immediately.
// "3" logs before p.then() because setTimeout() delays resolution.
// "2" logs last after 1 second.
