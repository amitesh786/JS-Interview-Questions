const App = () => {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      setTimeout(() => {
        console.log(count);
      }, 3000);
    }, []);
  
    return <h1>{count}</h1>;
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Options:
// A) 0
// B) Updated count
// C) Undefined
// D) Memory leak error

// Explanation

// The useEffect hook has an empty dependency array ([]), 
// meaning it only runs once, when the component mounts.

// Inside useEffect, there is a setTimeout function that logs count after 3 seconds.

// Since count is 0 at the time of the initial render, 
// the logged value will be 0—even if count updates later,
// because the callback inside setTimeout captures the initial state value (closure behavior).

// No re-renders trigger the effect again, so the timeout always logs the initial value.

// Step by Step?
// Component mounts with count = 0
// useEffect runs once (due to [] dependency array)
// setTimeout schedules a log after 3 seconds
// Even if count updates later, the timeout function still references the old value of count (0)
