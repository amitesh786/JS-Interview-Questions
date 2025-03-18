// What is the output of below code:

const App = () => {
    let countRef = useRef(0);

    function handleIncrement() {
      countRef.current = countRef.current + 1;
    }
  
    return <>
      <span>Count: {countRef.current}</span>
      <button onClick={handleIncrement}>Click me</button>
    </>;
};
export default App;

// A: Cannot read current property of undefined
// B: Count: 1
// C: null
// D: Count: 0

// In React, every update has two phases.

// Render: This is where React calls the components in order to output something on the screen
// Commit: React applies changes to the DOM

// Any updates to the ref will be reflected only in the commit phase. 
// In other words, React sets counterRef.current during the commit phase. 
// Hence, countRef.current always holds value 0 irrespective of how many times the Increment button clicked.

