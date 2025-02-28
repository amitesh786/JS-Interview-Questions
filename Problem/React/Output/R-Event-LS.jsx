const App = () => {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      const handleClick = () => {
        console.log("Clicked:", count);
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }, []);
  
    return (
      <button onClick={() => setCount(count + 1)}>Click</button>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Scenario: Click the button twice. What will be logged?
// Options:
// A) "Clicked: 0" → "Clicked: 1"
// B) "Clicked: 0" → "Clicked: 0"
// C) "Clicked: 0" → "Clicked: 1" → "Clicked: 2"
// D) "Clicked: 1" → "Clicked: 2"

// 💡 Hint: Does the event listener capture the latest state?

// The correct answer is:
// B) "Clicked: 0" → "Clicked: 0"

// Explanation

// On Initial Render (count = 0):
// useEffect runs once because of the empty dependency array ([]).
// Inside useEffect, an event listener (handleClick) is added to document.
// The function captures the value of count at that moment (count = 0) due to JavaScript closures.
// The cleanup function (removeEventListener) is never called again since useEffect doesn't re-run.

// First Button Click (count = 1):
// setCount(count + 1) schedules a state update.
// The component re-renders, but useEffect does not run again (because it has an empty dependency array).
// The old event listener (which captured count = 0) is still in effect.
// Clicking anywhere logs -> Clicked: 0

// Second Button Click (count = 2):
// count updates to 2, but the event listener is still using the old count = 0.
// Clicking anywhere logs -> Clicked: 0

