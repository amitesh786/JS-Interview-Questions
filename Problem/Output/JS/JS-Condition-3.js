console.log([] + [] + '1');
console.log(true + false);
console.log((true + false) > 1);
console.log(0.1 + 0.2 === 0.3);

console.log((x => x)(() => 5)());
console.log(!!"0" == !!"false");
console.log([] == false == ![]);

// Explanation:

// 1️⃣ console.log([] + [] + '1');
// [] + [] → "" (empty string).

// "" + "1" → "1".
// Final Output: "1" ✅

// 3️⃣ console.log(true + false);
// true is 1, false is 0.

// 1 + 0 → 1.
// Final Output: 1 ✅

// 4️⃣ console.log((true + false) > 1);
// true + false → 1.

// 1 > 1 → false.
// Final Output: false ❌


// 5️⃣ console.log(0.1 + 0.2 === 0.3);
// Floating-point precision issue in JavaScript!

// 0.1 + 0.2 === 0.30000000000000004
// Final Output: false ❌

// 8️⃣ console.log((x => x)(() => 5)());
// (x => x) is an identity function.
// (() => 5) is passed as x, so x is () => 5.

// Calling x() → 5.
// Final Output: 5 ✅

// 🔟 console.log([] == false == ![]);
// [] == false → true (as explained earlier).

// true == ![] → true == false → false.
// Final Output: false ❌
