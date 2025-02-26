
const App = () => {
    let count = 0;

    const handleClick = () => {
        count++;
        console.log(count);
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
// A) The count will update in the UI
// B) The count will not update in the UI
// C) Error
// D) Undefined behavior

// Explanation

// 1. Variable Scope Issue:

// count is declared as a normal variable (let count = 0;), not state (useState).
// This means React is not tracking it for updates.

// 2. Event Handling:

// When the button is clicked, handleClick is executed.
// count++ increments count, and console.log(count); logs the updated value to the console.
// However, since React does not re-render the component, 
// the UI does not reflect the updated count value.

// 3. No Re-Render Trigger:

// In React, UI updates only occur when state changes via useState or useReducer.
// Since count is just a regular variable,
// React has no way of knowing it changed, so the component does not re-render.

// What Actually Happens?
// Clicking the button updates count in memory but not in the UI.
// The UI always displays Count: 0, because the component does not re-render.
// The console logs will show 1, 2, 3... on each click, but the UI remains unchanged.

// ✅ Final Answer: B) The count will not update in the UI.

// Fix this problem:
// const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };
