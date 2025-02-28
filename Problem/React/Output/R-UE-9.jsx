const App = () => {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      console.log("Effect runs:", count);
      return () => console.log("Cleanup runs:", count);
    }, [count]);
  
    return (
      <button onClick={() => setCount(count + 1)}>Click</button>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  
// Scenario: Click the button twice. What gets logged?

// Options:
// A) "Effect runs: 0" → "Effect runs: 1" → "Effect runs: 2"
// B) "Effect runs: 0" → "Cleanup runs: 0" → "Effect runs: 1" → "Cleanup runs: 1" → "Effect runs: 2"
// C) "Effect runs: 0" → "Cleanup runs: 2" → "Effect runs: 2"
// D) "Effect runs: 0" → "Cleanup runs: 1" → "Effect runs: 2"

// 💡 Hint: When does useEffect run and when does cleanup happen?

// The correct answer is:
// B) "Effect runs: 0" → "Cleanup runs: 0" → "Effect runs: 1" → "Cleanup runs: 1" → "Effect runs: 2"

// Explanation

// On Initial Render:
// The effect runs with count = 0, logging -> Effect runs: 0

// First Click (count = 1):
// The component re-renders, and before the effect runs again, 
// React cleans up the previous effect by running the cleanup function: -> Cleanup runs: 0
// Then, the effect runs with count = 1 -> Effect runs: 1

// Second Click (count = 2):
// The component re-renders again. Cleanup from the previous effect runs first: -> Cleanup runs: 1
// Then, the effect runs with count = 2 -> Effect runs: 2

