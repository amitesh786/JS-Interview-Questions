// How can you optimize React performance?

import { useState, useMemo } from "react";

const ChildComponent = ({ number }) => {
  const slowCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
  const computedValue = useMemo(() => slowCalculation(number), [number]);
  return <h2>Computed Value: {computedValue}</h2>;
};

const App = () => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
      <ChildComponent number={num} />
    </div>
  );
};

export default App;

// 1. ChildComponent - It receives a prop called number.
// It defines a function slowCalculation(num), which artificially creates a delay 
// (simulating an expensive computation) by looping a billion times before returning num * 2.
// The function is wrapped inside useMemo to memoize the computed result so that it only recalculates when number changes.
// It then renders the computed value inside an <h2> tag.

// 2. App
// It uses the useState hook to maintain a state variable num, initialized to 1.
// It renders a button that increments num when clicked.
// It passes num as a prop to ChildComponent.

// The useMemo hook prevents slowCalculation from running on every render. It only recalculates when number changes.

// Performance Improvement:
// Without useMemo, the slow function would execute unnecessarily on each render, causing lag.

// useMemo prevents expensive calculations from running on every render.

