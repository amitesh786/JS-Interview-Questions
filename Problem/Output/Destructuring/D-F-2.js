// Nested Object Destructuring in Function Parameters

// Question: How can you extract city from the address inside the function?

const person = { name: "Alice", address: { city: "New York" } };

function getCity(person) {
  // Extract city here
  console.log(city);
}
getCity(person);

// Answer:
function getCity({ address: { city } }) {
    console.log(city);
}
getCity(person); // "New York"
  
// Explanation:
// { address: { city } } extracts city from the nested address object.

