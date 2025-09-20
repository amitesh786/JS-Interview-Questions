console.log([] == ![]);
console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);
console.log('5' + 3 - 1);
console.log('5' - 3 + '1');

// Explanation:

// 1️⃣ console.log([] == ![]);
// Step 1: ![] → false because [] is truthy.
// Step 2: Now we have:
// [] == false

// Step 3: [] (empty array) is coerced to "" (empty string).
// Step 4: false is coerced to 0, so we now have
// "" == 0

// Step 5: "" (empty string) is also coerced to 0, so:
// 0 == 0
// Final Output: true ✅

// console.log(null == 0);
// Step 1: null is only loosely equal to undefined, but not to numbers.
// Step 2: null == 0 is false.
// Final Output: false ❌

// 3️⃣ console.log(null >= 0);
// Step 1: null is converted to 0 when using comparison operators (>=, <=, <, >).
// Step 2: 0 >= 0 → true.
// Final Output: true ✅

// 4️⃣ console.log(null > 0);
// Step 1: null is again converted to 0 (like in the previous case).
// Step 2: 0 > 0 → false.
// Final Output: false ❌

// 5️⃣ console.log('5' + 3 - 1);
// Step 1: '5' + 3 → "53" (string concatenation).
// Step 2: "53" - 1 → 52 (because - forces numeric conversion).
// Final Output: 52 ✅

// 6️⃣ console.log('5' - 3 + '1');
// Step 1: '5' - 3 → 2 (because - forces numeric conversion).
// Step 2: 2 + '1' → "21" (string concatenation).
// Final Output: "21" ✅

// Output:
true
false
true
false
52
"21"
