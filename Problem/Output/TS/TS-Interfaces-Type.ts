// TypeScript, interfaces and type aliases are both used to define object shapes, 
// but they have key differences:

interface Person 
{ 
  name: string; 
  age: number;
}

type PersonType = 
{ 
  name: string; 
  age: number;
};

// Interfaces

// Used primarily for defining object structures.
// Can be extended (extends) and merged (declaration merging).
// Preferred for defining reusable and extendable object contracts.

// Type Aliases

// More flexible, can define any type (objects, unions, primitives, functions).
// Cannot be extended via extends, but can use intersections (&).
// Useful for complex types like unions and mapped types.

// When to use?

// Use interfaces for objects and classes that need extension.
// Use type aliases for unions, primitives, or when you need more flexibility.
