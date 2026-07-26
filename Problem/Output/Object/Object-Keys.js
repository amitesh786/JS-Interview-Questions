// 1. Question: What will be the output?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// Options:
// A) 123
// B) 456 ✅
// C) undefined
// D) Error

// 💡 Hint: What happens when objects are used as keys in JavaScript?
