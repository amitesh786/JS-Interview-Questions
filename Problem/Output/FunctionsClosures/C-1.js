// What will be the output of the following code?

function outer() {
    let count = 0;
  
    return function inner() {
      count++;
      console.log(count);
    };
}

const fn1 = outer();
const fn2 = outer();

fn1(); // ?
fn1(); // ?
fn2(); // ?
fn1(); // ?

// Output
// 1  
// 2  
// 1  
// 3  

// Explanation:
// outer() is called twice, creating two separate closures (fn1 and fn2), 
// each with its own count variable.

// First call fn1() → count = 1

// Second call fn1() → count = 2

// First call fn2() → Since fn2 has its own closure, 
// its count starts at 0, then becomes 1.

// Third call fn1() → Since fn1 still has its own closure, 
// count increases to 3.

