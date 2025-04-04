// 1. Reverse a String

// Method: 1
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"

// Method: 2
const reverseString = (str) => [...str].reverse().join("");
console.log(reverseString("hello")); // "olleh"
