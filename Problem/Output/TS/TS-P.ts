// Question: Write a function that returns a promise resolving after 2 seconds.

function delayedMessage(message: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), delay);
    });
}

// Example usage
delayedMessage("Hello, TypeScript!", 2000).then(console.log);
