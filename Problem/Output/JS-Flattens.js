// flattens a nested array

const arr = [1, [2, [3, [4, 5]], 6], 7];

// solution 1:
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
}

console.log(flattenArray(arr));

// Solution 2

// const flattenArray = arr => arr.flat(Infinity);
// console.log(flattenArray([1, [2, [3, [4, 5]], 6], 7]));

