// "use strict";

function sum (arg1, arg2) {
    return arguments[0] + arguments[1];
}

console.log(sum(10, 10));

// Important Notes
// In non-strict mode ("use strict" is NOT enabled):
// arguments reflects changes to function parameters.
// So, updating arg1 = 20 also updates arguments[0], making the result 30.
// In strict mode ("use strict"):
// The arguments object is not linked to function parameters.
// Changing arg1 = 20 won't change arguments[0].
// So, the result would be 10 + 10 = 20.
