// Question: Implement function overloading in TypeScript for a function that adds numbers or concatenates strings.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

// Example usage
console.log(add(5, 10)); // Output: 15
console.log(add("Hello, ", "World!")); // Output: "Hello, World!"
