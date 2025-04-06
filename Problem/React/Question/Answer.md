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
