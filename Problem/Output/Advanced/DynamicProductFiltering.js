// Problem: Dynamic Product Filtering
// You need to filter products based on price 
// range, category, and stock availability.

// 2️⃣ Real-World Use Case: Filtering Products in an E-commerce App
const products = [
    { name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { name: "Phone", price: 700, category: "Electronics", inStock: false },
    { name: "Shoes", price: 150, category: "Fashion", inStock: true },
    { name: "T-shirt", price: 50, category: "Fashion", inStock: true },
];

// ✅ Dynamic filter() for E-commerce
function filterProducts(minPrice, maxPrice, category, inStockOnly) {
    return products.filter(product => 
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.category === category &&
        (!inStockOnly || product.inStock)
    );
}

// Example: Get "Electronics" products between $500 and $1500, only in stock
console.log(filterProducts(500, 1500, "Electronics", true));

// Combining filter() with map()
// After filtering, you can transform the data using map():

const filteredNames = filterProducts(500, 1500, "Electronics", true)
    .map(product => product.name);

console.log(filteredNames); // ["Laptop"]

// Why?

// First, filter the matching products
// Then, map to get only product names

// Final Thoughts
// Need speed? Optimize .filter() with short-circuiting or for loops.
// Need flexibility? Use .filter() in dynamic search and e-commerce filtering.
// Need transformation? Combine .filter() with .map().
