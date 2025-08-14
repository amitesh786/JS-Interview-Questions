var a = 10;
(function() {
    console.log(a);
    var a = 20;
    console.log(a);
})();

// Explanation:

// Variable Hoisting

// JavaScript hoists variable declarations (var), but not their assignments.

var a; // Hoisted declaration (initially undefined)
console.log(a); // Access before assignment → undefined
a = 20;
console.log(a); // Prints 20

// Execution:

// console.log(a); → The a inside the function is hoisted but uninitialized, so it prints undefined.
// var a = 20; → a is assigned 20.
// console.log(a); → Prints 20.
