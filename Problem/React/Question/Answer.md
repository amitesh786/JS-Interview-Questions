* Problem 1: Which things cause React components to re-render?

1. State Changes (useState): When a component’s state is updated using useState, React schedules a re-render.
2. Props Change: If a parent component passes new props to a child component, the child re-renders.
3. Context Value Updates (useContext): If a React Context value changes, all consuming components re-render.
4. Parent Component Re-renders: If a parent re-renders, all of its children re-render, even if their props haven’t changed.
5. Force Update (useReducer or useState with a different reference): If you manually force a state update (e.g., forceUpdate() with useReducer), React triggers a re-render.
6. Hooks Like useEffect with Dependencies: If a dependency in useEffect changes, React may cause a re-render.

**How to Avoid Unnecessary Re-renders?**
1. Use React.memo() for functional components.
2. Use useCallback() to memoize functions.
3. Use useMemo() to memoize values.
4. Use proper state management (avoid re-rendering everything unnecessarily).

* Problem 2: What is useEffect, and what is a case where you might want to use it?

useEffect is a React Hook that allows you to perform side effects in function components.
- Side effects include things like:
    - Fetching data from an API
    - Manually manipulating the DOM
    - Subscribing to events or WebSockets
    - Setting up timers or intervals
It runs after the component renders and can be configured to re-run only when certain dependencies change.

**Keys:**
1. useEffect handles side effects in function components.
2. It runs after render, and its execution depends on the dependency array.
3. It can fetch data, manipulate the DOM, handle subscriptions, etc.
4. It supports a cleanup function to avoid memory leaks.

* Problem 3: How can useCallback solve a common issue with JavaScript in React?

useCallback is a React Hook that memoizes a function, preventing it from being recreated on every render.

The Problem: unnecessary function re-creation: In React, functions inside components are recreated on every render. This can cause performance issues when passing functions as props to child components, leading to unnecessary re-renders.

- When should you use useCallback?
1. When passing functions to memoized child components (React.memo).
2. When passing functions as dependencies to useEffect, avoiding infinite loops.
3. When optimizing performance in large apps with frequent re-renders.

**Keys:**
- Problem: Functions are recreated on every render, causing unnecessary child re-renders.
- Solution: useCallback memoizes the function, ensuring it's only re-created when dependencies change.
- Benefit: Prevents unnecessary renders, improving performance.

