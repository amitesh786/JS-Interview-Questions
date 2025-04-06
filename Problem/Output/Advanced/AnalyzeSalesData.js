// Hard Challenge: Analyze Sales Data
// You have an array of sales records from an e-commerce store. Each record contains:

// id → Order ID
// customer → Customer Name
// items → Number of items purchased
// total → Total order amount
// status → Can be "completed", "pending", or "canceled"

// Task
// Filter: Only include "completed" orders.
// Map: Extract the customer and total amount spent.
// Reduce: Find the total revenue from completed orders.

// Sample Data
const orders = [
    { id: 1, customer: "Alice", items: 3, total: 150, status: "completed" },
    { id: 2, customer: "Bob", items: 1, total: 50, status: "pending" },
    { id: 3, customer: "Charlie", items: 5, total: 300, status: "completed" },
    { id: 4, customer: "David", items: 2, total: 120, status: "canceled" },
    { id: 5, customer: "Eve", items: 4, total: 200, status: "completed" }
];

// Expected Output
[
    { customer: "Alice", total: 150 },
    { customer: "Charlie", total: 300 },
    { customer: "Eve", total: 200 }
]
// Total Revenue: 650

// Solution
const completedOrders = orders
    .filter(order => order.status === "completed") 
    .map(order => ({ customer: order.customer, total: order.total })); 

const totalRevenue = completedOrders.reduce((sum, order) => sum + order.total, 0);

console.log(completedOrders);
console.log("Total Revenue:", totalRevenue);

// Explanation
// Filter → Selects only "completed" orders.
// Map → Extracts customer and total amount.
// Reduce → Sums up the total revenue.

// Bonus Challenge:
// Modify the function to:

// Group sales by customer name.
// Calculate the total amount each customer spent.
// Return an object with customer names as keys and total spent as values.

// Hint: Use .reduce() to group by customer.
