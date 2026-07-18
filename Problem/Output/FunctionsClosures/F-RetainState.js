// 1. Question: What will be the output?

function createCounter() {
  let count = 0;

  return function () {
    console.log(count);
    count++;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter2();
counter1();

// Options:
// A) 0 1 2 3
// B) 0 1 0 2 ✅
// C) 0 1 0 1
// D) 0 1 1 2

// Hint: Closures retain state, but does each instance have its own state?
