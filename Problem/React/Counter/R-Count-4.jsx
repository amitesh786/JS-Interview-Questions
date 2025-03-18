const App = () => {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      console.log("Effect runs");
      return () => console.log("Cleanup runs");
    }, [count]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Options:
// A) "Effect runs" only once
// B) "Effect runs" on every render
// C) "Cleanup runs" on every state change followed by "Effect runs"
// D) "Effect runs" on mount, but "Cleanup runs" only on unmount

// Explanation

// The useEffect hook runs after the component renders.
// The effect has [count] as its dependency array, meaning it runs whenever count changes.
// Before running the effect again, 
// React cleans up the previous effect by calling the function returned from useEffect
//  (i.e., () => console.log("Cleanup runs")).
// On every state update (when count changes), React first runs cleanup, then re-runs the effect.

// Initial render -> Effect runs
// When you click the button (count updates): -> Cleanup runs - then -> Effect runs
// Click again -> Cleanup runs - then -> Effect runs

