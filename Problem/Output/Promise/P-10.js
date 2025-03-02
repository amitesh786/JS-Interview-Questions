// 10. Fetch API with Async/Await

// Question: How do you handle errors in fetch() using async/await?

async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) throw new Error("Network response was not OK");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  }
fetchData();

// Explanation:

// Check response.ok to handle HTTP errors.
// Use try...catch for fetch failures.
