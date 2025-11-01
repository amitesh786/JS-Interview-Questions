// To calculate the number of keys in an object (obj)

let obj = { 
    "name": "Amitesh Singh",
    "location": "Milan, Italy"
};

// Method 1: Object.keys()
console.log("Object Key lengt (Method 1):", Object.keys(obj).length); // Output: 2

// Method 2: for...in loop with counter
let count = 0;
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        count++;
    }
}
console.log("Object Key length (Method 2):", count); // Output: 2

// Method 3: Object.entries()
console.log("Object Key length (Method 3):", Object.entries(obj).length); // Output: 2

// Method 4: Object.getOwnPropertyNames()
console.log("Object Key length (Method 4):", Object.getOwnPropertyNames(obj).length); // Output: 2
