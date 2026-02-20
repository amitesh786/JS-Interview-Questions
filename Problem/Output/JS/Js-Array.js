console.log([] == false);
// console.log([] === false);
console.log(![]);
console.log(!![]);
console.log([] + []);
console.log([] - 1);
console.log([1, 2, 3] + [4, 5, 6]);

// Output:
// true
// false
// false
// true
// ""
// -1
// 1,2,34,5,6

// Explanation:

// 1️⃣ console.log([] == false);
// == (loose equality) converts both sides to a common type.
// [] is an empty array, and in a boolean context, it is truthy.
// But == triggers type coercion:
// [] converts to "" (empty string).
// false converts to 0.
// "" == 0 → true.
// Output: true

// 2️⃣ console.log([] === false);
// === (strict equality) checks for both type and value.
// [] is an array (object), and false is a boolean.
// Objects are never equal to primitives with ===.
// Output: false

// 3️⃣ console.log(![]);
// ! (logical NOT) converts the operand to a boolean.
// An empty array [] is truthy.
// !truthy → false.
// Output: false

// 4️⃣ console.log(!![]);
// !! forces a value into a strict boolean.
// Since [] is truthy, !![] → true.
// Output: true

// 5️⃣ console.log([] + []);
// The + operator tries to convert both operands to strings.
// [] becomes "" (empty string).
// "" + "" → "".
// Output: "" (empty string)

// 6️⃣ console.log([] - 1);
// - operator forces [] into a number.
// [] (empty array) converts to 0.
// 0 - 1 = -1.
// Output: -1

// 7️⃣ console.log([1,2,3] + [4,5,6]);
// + with arrays triggers string conversion.
// [1,2,3] becomes "1,2,3".
// [4,5,6] becomes "4,5,6".
// "1,2,3" + "4,5,6" → "1,2,34,5,6".
// Output: "1,2,34,5,6" (concatenated string, NOT addition!)
