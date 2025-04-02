// Output

let count = 1;
console.log("Count Before:", count);

let funct = (count++, count++, count => count + 1);

console.log("Count After :", count);
console.log("Value Funct:", funct(count));

// Final Output:

// Count Before: 1
// Count After : 3
// Value Funct: 4
