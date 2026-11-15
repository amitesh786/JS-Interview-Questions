// Count the Occurrences of a Character in a String

let countChar1 = (str, char) => str.split(char).length - 1;

let countChar2 = (str, char) => [...str].filter((c) => c === char).length;

console.log(countChar1("hello world", "l")); // 3
