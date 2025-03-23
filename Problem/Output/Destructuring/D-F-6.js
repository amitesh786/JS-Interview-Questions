// Output

[a, b, ...rest] = [1, 2, 3, 4];

console.log(a);      // 1
console.log(b);      // 2
console.log(rest);   // [3, 4]

// The right-hand side ([1,2,3,4]) is an array with four elements.

// The left-hand side ([a, b]) uses array destructuring to assign values to a and b.

// a gets assigned the first value from the array → a = 1

// b gets assigned the second value from the array → b = 2

// The remaining values (3, 4) are ignored because there are only two variables on the left-hand side.
