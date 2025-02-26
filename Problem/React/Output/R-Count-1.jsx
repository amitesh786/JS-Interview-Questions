
const App = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setCount(count + 1);
    }, []);

    return <h1>{count}</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Options:
// A) 0
// B) 1
// C) Infinite loop
// D) Error

// Explanation

// 1. Initial State:

// The useState hook initializes count to 0.
// const [count, setCount] = React.useState(0);

// 2. useEffect Hook Execution:

// useEffect runs after the initial render because it has an empty dependency array ([]).
// Inside useEffect, setCount(count + 1) is called. Since count was initially 0, it sets count to 1.

// 3. Re-render:

// When setCount(1) executes, React schedules a re-render.
// On the next render, count is now 1, and since useEffect does not run again 
// (because it has an empty dependency array), the final rendered output is 1.

// Why It Doesn't Cause an Infinite Loop?
// The useEffect runs only once after the initial render.
// Since there are no dependencies ([]), it does not trigger again when count updates.
// Hence, React stops at count = 1, preventing an infinite loop.

// Final Output:
// <h1>1</h1>
// ✅ Answer: B) 1
