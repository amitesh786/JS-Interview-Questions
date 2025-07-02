// How to access fn function, is it possible ?

[1,2,3].map(function fn(num) {
	return num * num;
});

// You define a named function expression (fn), 
// and immediately pass it to .map(). 
// However, the name fn is only available inside the function itself,
// not in the outer scope.

// How to make it accessible
function fn(num) {
  return num * num;
}

const result = [1, 2, 3].map(fn);
console.log("result:", result); // [1, 4, 9]

console.log(fn(4)); // 16
