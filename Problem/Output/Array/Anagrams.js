// Check if Two Strings are Anagrams

const isAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
  
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
