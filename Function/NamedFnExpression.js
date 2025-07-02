// How to access fn function, is it possible ?

[1,2,3].map(function fn(num) {
	return num * num;
});

// You define a named function expression (fn), 
// and immediately pass it to .map(). 
// However, the name fn is only available inside the function itself,
// not in the outer scope.
