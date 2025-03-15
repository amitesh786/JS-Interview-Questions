// 1. Question: Write a generic function that returns the first element of an array.

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// Example usage
console.log(getFirstElement([1, 2, 3]));  // Output: 1
console.log(getFirstElement(["a", "b", "c"]));  // Output: "a"

