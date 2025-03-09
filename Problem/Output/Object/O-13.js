// How would you implement prototypal inheritance using Object.create()?

const Animal = {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
};

const dog = Object.create(Animal);
dog.name = "Buddy";
dog.speak(); // Output: Buddy makes a sound.

// This establishes Animal as the prototype of dog, so dog inherits the speak() method.
