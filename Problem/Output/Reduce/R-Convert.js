// 3. Convert an array of numbers into an object where keys are numbers and values are their frequency.

const arr = [1, 2, 2, 3, 3, 3];

const frequencyCounter = (arr) => 
    arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
// Example usage:
console.log(frequencyCounter(arr)); 
// Output: { '1': 1, '2': 2, '3': 3 }

