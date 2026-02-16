// 3. Question: What will be the output?
let x = 10;

function foo() {
  console.log(x);
  let x = 20;
  console.log(x);
}

foo();

// Options:
// A) 10 20
// B) undefined 20
// C) ReferenceError
// D) 20 20
