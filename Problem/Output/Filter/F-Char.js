// 4. Find All Words Longer than 5 Characters

const words = ["apple", "banana", "kiwi", "strawberry", "grape"];

const longWords = words.filter(word => word.length > 5);

console.log(longWords); // ["banana", "strawberry"]

// Explanation: Filters words whose length is greater than 5 characters.
