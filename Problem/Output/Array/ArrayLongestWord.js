// Find the all Longest Word in a Sentence

const longestWord = (sentence) => sentence.split(" ").reduce((longest, word) => 
      word.length > longest.length ? word : longest, "");
  
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

const longestWords = (sentence) => {
  let words = sentence.split(" ");
  let maxLength = Math.max(...words.map(word => word.length)); // Find the max length
  return words.filter(word => word.length === maxLength); // Return all words of that length
};

console.log(longestWords("The quick brown fox jumps over the lazy dog"));
