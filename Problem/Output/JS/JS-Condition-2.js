console.log(typeof NaN);
console.log(NaN == NaN);
console.log([] == false);
console.log(("foo" && true) || false);
console.log(!!"false" == !!"true");
console.log(((x) => x)("x"));

// Explanation:

// 1️⃣ console.log(typeof NaN);
// NaN stands for Not-a-Number, but ironically:

// typeof NaN === 'number'
// Final Output: "number" ✅

// 2️⃣ console.log(NaN == NaN);
// In JavaScript, NaN is not equal to itself!

// NaN == NaN // false
// Final Output: false ❌

// 5️⃣ console.log([] == false);
// [] is truthy, but == (loose equality) does type coercion.
// [] converts to "" (empty string).

// "" == false → 0 == 0 → true.
// Final Output: true ✅

// 6️⃣ console.log('foo' && true || false);
// 'foo' && true → true (both are truthy).

// true || false → true.
// Final Output: true ✅

// 7️⃣ console.log(!!'false' == !!'true');
// 'false' is a non-empty string, so it's truthy.
// 'true' is also a non-empty string, so it's truthy.

// !!'false' → true, and !!'true' → true.
// true == true → true.
// Final Output: true ✅

// 🔟 console.log((x => x)('x'));
// This is an immediately invoked arrow function:

// (x => x)('x') // returns 'x'
// Final Output: "x" ✅

// Output:
("number");
false;
true;
true;
true;
("x");
