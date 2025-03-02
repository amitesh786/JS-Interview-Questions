//  7. How do async/await and Promises interact?

// Question: What will be the output?

async function test() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
  }
  console.log(3);
  test();
  console.log(4);

//   Answer
// 3
// 1
// 4
// 2

// Explanation:

// console.log(3) runs first.
// test() starts (console.log(1)).
// await Promise.resolve() pauses execution.
// console.log(4) runs before console.log(2), because await moves console.log(2) into the microtask queue.
