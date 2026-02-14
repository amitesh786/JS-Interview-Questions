// 4. Question: What gets logged and in what order?
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

setTimeout(() => console.log("D"), 0);

console.log("E");

// Options:
// A) A B C D E
// B) A E C B D
// C) A C E B D
// D) A E B C D
