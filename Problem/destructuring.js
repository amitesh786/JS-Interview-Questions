const obj = { name: "Amitesh" };

{ x: obj['name'] } = { x: "Singh"};

console.log(obj); // is not a valid destructuring assignment.

// JS will consider as block scope, if we add () it will convert into expression

({ x: obj['name'] } = { x: "Singh"});

console.log(obj); // { x: "Singh" }
