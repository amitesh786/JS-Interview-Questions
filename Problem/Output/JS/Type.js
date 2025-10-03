// What will be the output ?
var test = 1;

if (function fn(){}) {
	test += typeof fn;
}
console.log(test);

// if (function fn(){})
// is a function expression, not a declaration. So fn is not defined in the outer scope.

// any function defined like this evaluates to a truthy value, because it's just an object.
// if (function fn(){}) // → truthy → condition passes
// So we enter the if block.

// if (function fn(){})	Function is truthy → if runs

// typeof fn "undefined" (fn is not defined in this scope)

// test += typeof fn test = "1undefined"
