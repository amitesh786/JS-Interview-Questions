// 6. Question: What will be logged in the console?
let count = 0;

const increment = () => {
  if (count === 3) return;
  console.log(count);
  count++;
  setTimeout(increment, 0);
};

setTimeout(increment, 0);
console.log("Done");

// Options:
// A) 0 1 2 Done
// B) Done 0 1 2
// C) 0 1 2 3 Done
// D) Infinite Loop
