//  Find the Largest Number in an Array
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([10, 25, 5, 30, 40])); // 40

//  Find the Min Number in an Array
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([10, 25, 5, 30, 40])); // 5

// Loop to find largest number in an Array
let num = [10, 25, 5, 30, 40];
let maxNum = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > maxNum) maxNum = num[i];
}

console.log("Largest number:", maxNum); // 40
