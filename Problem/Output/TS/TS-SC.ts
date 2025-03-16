// Question: Implement a Singleton pattern in TypeScript.

class Singleton {
    private static instance: Singleton;

    private constructor() {} // Private constructor prevents direct instantiation

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Example usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // Output: true
