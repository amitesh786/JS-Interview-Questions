// "use strict";
{
    function display() {
        console.log("Inside display");
    }
}

display(); 

// What's Happening?

// In JavaScript, function declarations inside a block { ... } are not block-scoped as variables declared with let or const.
// Instead, function declarations are hoisted to the enclosing function or global scope (in non-strict mode).
// This means that display() is available outside the block, which does not follow the typical block scoping rule.

// But in non-strict mode, display() is still accessible outside the block.

// Strict Mode
// In strict mode, functions inside blocks are block-scoped.
// Result: display() is not accessible outside the block.
