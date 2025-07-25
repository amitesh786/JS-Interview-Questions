// Find the Missing Number in an Array

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - actualSum;
}
  
console.log(findMissingNumber([1, 2, 3, 5])); // 4
