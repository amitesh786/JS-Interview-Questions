// What are the advantages of using Object.create() over new Constructor()?

// Using Object.create() provides more flexibility than using a constructor function or class instantiation (new Constructor()).

// Advantages of Object.create()
// Prototype Control:

// You can create an object with any prototype, not just from a constructor function.
// Avoids Constructor Side Effects:

// When using new Constructor(), the constructor function runs, possibly modifying state.
// Object.create() creates an object without executing any function.
// Simpler Prototypal Inheritance:

// It allows direct prototypal inheritance without defining constructor functions.
// Can Create Objects Without Object.prototype (null prototype objects)

// Useful for dictionary-like objects without unwanted inherited properties.

// Using Object.create()
const animal = {
    makeSound() {
        console.log(this.sound);
    }
};

const dog = Object.create(animal);
dog.sound = "Bark";
dog.makeSound(); // Output: Bark

// Using new Constructor()
function Animal(sound) {
    this.sound = sound;
}
Animal.prototype.makeSound = function () {
    console.log(this.sound);
};

const cat = new Animal("Meow");
cat.makeSound(); // Output: Meow

// Key Difference: 
// Object.create(animal) lets us set the prototype directly, 
// whereas new Animal("Meow") depends on a constructor.
