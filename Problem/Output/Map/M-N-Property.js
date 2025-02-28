// 4. Add a New Property to Each Object

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
];

const updatedProducts = products.map(product => ({
    ...product,
    tax: product.price * 0.1
}));

console.log(updatedProducts);
// [
//   { name: 'Laptop', price: 1000, tax: 100 },
//   { name: 'Phone', price: 500, tax: 50 }
// ]
