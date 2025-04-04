//  Convert First Letter of Each Word to Uppercase

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  console.log(capitalizeWords("hello world")); // "Hello World"

const capitalizeWords = (str) =>
  str.split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalizeWords("hello world"));
