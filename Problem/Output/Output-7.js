
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(3 > 2 == 1);
console.log(3 > 2 === 1);

// Output:
true
false
true
false

// Explanation:
// Let’s analyze each expression step by step:

// 1️⃣ console.log(1 < 2 < 3);
// Step 1: 1 < 2 → true ✅
// Step 2: Now we have: true < 3
// Step 3: true is coerced into 1, so it becomes: 1 < 3
// Step 4: 1 < 3 is true.
// Final Output: true ✅

// 2️⃣ console.log(3 > 2 > 1);
// Step 1: 3 > 2 → true ✅
// Step 2: Now we have: true > 1
// Step 3: true is coerced into 1, so it becomes: 1 > 1
// Step 4: 1 > 1 is false. ❌
// Final Output: false

// 3️⃣ console.log(3 > 2 == 1);
// Step 1: 3 > 2 → true ✅
// Step 2: Now we have: true == 1
// Step 3: true is coerced to 1, so: 1 == 1
// Step 4: 1 == 1 is true. ✅
// Final Output: true

// 4️⃣ console.log(3 > 2 === 1);
// Step 1: 3 > 2 → true ✅
// Step 2: Now we have: true === 1
// Step 3: true is a boolean, and 1 is a number.
// Step 4: Strict equality (===) checks both value and type, and since true !== 1, it evaluates to false. ❌
// Final Output: false

// Output:
true
false
true
false
