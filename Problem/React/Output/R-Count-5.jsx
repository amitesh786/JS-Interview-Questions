
const App = () => {
    const [count, setCount] = React.useState(0);
  
    const handleClick = () => {
      setCount(prev => prev + 1);
      console.log(count);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click</button>
        <p>Count: {count}</p>
      </div>
    );
};
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Options:
// A) The console will log the updated count
// B) The console will log the previous state value
// C) Undefined behavior
// D) React will throw an error

// Explanation
// setCount(prev => prev + 1) correctly updates the state based on the previous value.

// However, state updates in React are asynchronous.
// The setCount call schedules an update, but console.log(count) runs immediately,
// before the state actually updates.

// Since count hasn't changed yet when console.log(count) 
// executes, it logs the previous state value.

// Example Output:
// Assume the initial state count = 0. Here's what happens when you click the button:

// Click #1:
// setCount(prev => prev + 1) schedules count = 1
// console.log(count) logs 0 (previous state)

// Click #2:
// setCount(prev => prev + 1) schedules count = 2
// console.log(count) logs 1

