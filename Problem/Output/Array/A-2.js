// 2. Check if a String is a Palindrome

const str = "A man, a plan, a canal: Panama";

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Case-Insensitive & Ignoring Non-Alphanumeric Characters
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
