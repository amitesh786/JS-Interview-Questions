// Operator

let x = 3;
let y = x++ + ++x;

// What are the values of x and y?

// x++ (post-increment) returns the current value before increasing x.
// ++x (pre-increment) increments first and then returns the new value.
// Since x++ returns 3 and ++x returns 5, y = 3 + 5 = 8, and x finally becomes 5.
