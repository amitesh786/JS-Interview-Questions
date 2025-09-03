// Question: Define a TypeScript object with readonly and optional properties.
interface Product {
    readonly id: number;
    name: string;
    description?: string; // Optional property
}

// Example usage
const product: Product = { id: 101, name: "Laptop" };
// product.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(product);
