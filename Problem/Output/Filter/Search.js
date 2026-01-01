// 7. Filter Array of Objects Based on Search Query

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const searchQuery = "laptop";
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

console.log(filteredProducts);
// Output: [{ name: "Laptop", price: 1000 }]

// Explanation: Filters products that contain "laptop" in their name (case-insensitive).
