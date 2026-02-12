// 2. Question: What will be logged in the console?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Options:
// A) 0, 1, 2
// B) 3, 3, 3 ✅
// C) 0, 0, 0
// D) Undefined behavior

// 💡 Hint: How does var work inside loops with async functions?
