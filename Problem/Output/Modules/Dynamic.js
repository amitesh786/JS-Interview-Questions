// 2. Dynamic Imports
// file: main.js
async function loadMathModule() {
    const math = await import('./math.js');
    console.log(math.add(2, 3)); 
}

loadMathModule();

// How does dynamic import work, and when should you use it over static import?

