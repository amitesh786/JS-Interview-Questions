// Why is Object.setPrototypeOf() considered slower than defining the prototype in a constructor?

// Reason:
// When you define a prototype in a constructor function, JavaScript optimizes the object structure early.

// Fast Approach: Constructor with Prototype
function Animal() {}
Animal.prototype.speak = function () {
    console.log("Speaking...");
};

const cat = new Animal(); // Prototype is already set at creation
cat.speak(); // Optimized execution

// Slow Approach: Object.setPrototypeOf()

const obj = {};
Object.setPrototypeOf(obj, { speak: function () { console.log("Speaking..."); } });

obj.speak(); // Slower because of prototype modification at runtime

// Key Takeaway: 
// Setting prototypes dynamically forces re-optimization, slowing down property access.
