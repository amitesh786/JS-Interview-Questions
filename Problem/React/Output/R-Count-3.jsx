
const App = () => {
    const [count, setCount] = React.useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>Count: {count}</p>
      </div>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  
// Options:
// A) The count will increase by 2 on each click
// B) The count will increase by 3 on each click
// C) The count will increase by 4 on each click
// D) Undefined behavior

// Key React State Update Rules:
// If setState is called multiple times with the same value (count + 1),
// only the last one will be considered before a re-render.
// When using prevState, React processes them sequentially, applying each one in order.

// Step-by-Step Execution (Starting from count = 0):
// 1st and 2nd Updates (setCount(count + 1))
// count is initially 0.
// setCount(count + 1); → React schedules setCount(1).
// setCount(count + 1); → Again, React schedules setCount(1).

// Since both updates set count to the same value (1), React ignores the second one.
// ➡️ Effective update from these two lines: count → 1 (only once, not twice).

// 3rd and 4th Updates (setCount(prev => prev + 1))
// The first prev => prev + 1 runs, increasing count from 1 → 2.
// The second prev => prev + 1 runs, increasing count from 2 → 3.
// ➡️ Final count after these updates: count → 3.
