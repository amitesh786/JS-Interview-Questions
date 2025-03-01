// 3.  Remove Falsy Values from an Array

const values = [0, 1, false, 2, "", 3, null, undefined, NaN];

const truthyValues = values.filter(Boolean);

console.log(truthyValues); // [1, 2, 3]

// Explanation: The Boolean function filters out false, 0, "", null, undefined, NaN.
