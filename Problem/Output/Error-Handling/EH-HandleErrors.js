// How do you handle errors in async/await?

// Use try...catch to handle errors in async/await functions.

async function fetchData() {
  try {
    let response = await fetch("https://invalid.url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

fetchData();
