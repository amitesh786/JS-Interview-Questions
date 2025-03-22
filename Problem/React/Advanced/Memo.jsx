// What is React.memo and how does it optimize re-renders?

import React, { useState } from "react";

const ChildComponent = React.memo(({ value }) => {
  console.log("Child component re-rendered");
  return <h2>Value: {value}</h2>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent value={value} />
    </div>
  );
};

export default App;


// React.memo is a higher-order component (HOC) that memoizes functional components, 
// preventing unnecessary re-renders when props remain unchanged.

// ChildComponent:
// Wrapped with React.memo, meaning it only re-renders if its value prop changes.
// console.log "Child component re-rendered" to the console when it re-renders.

// App:
// Manages two states: count and value.
// Clicking the Increment Count button updates count, but does not change value.

// Optimization:
// Since React.memo prevents unnecessary renders, the ChildComponent will 
// not re-render when count changes because its prop (value) remains the same.
// If value changes, ChildComponent will re-render.

// React.memo prevents re-rendering if props haven't changed.

