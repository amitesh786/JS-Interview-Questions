// Check if an Array Contains a Duplicate

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1, 2, 3, 4])); // false
console.log(hasDuplicate([1, 2, 3, 3])); // true

// Check if an Array Contains a no duplication

function hasNoDuplication(arr) {
  return new Set(arr).size === arr.length;
}

console.log(hasNoDuplication([1, 2, 3, 4])); // true
console.log(hasNoDuplication([1, 2, 3, 3])); // false
