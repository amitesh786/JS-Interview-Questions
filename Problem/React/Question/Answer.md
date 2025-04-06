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

* Problem 4: What is React Context and how does it work?

React Context is a built-in feature that allows you to share state and data across components without passing props manually at every level (prop drilling). 
It is useful for global state management, such as:

- Theme (dark/light mode)
- Authentication (user login state)
- Language settings
- Global UI settings (e.g., modals, notifications)

**How React Context works**

React Context has three main parts:
1. createContext() → Creates a Context object.
2. Provider → Wraps components and provides a value.
3. Consumer or useContext() → Accesses the Context value inside components.

**When to use React Context?**
1. When multiple components need access to the same data (e.g., auth, theme, user preferences).
2. When you want to avoid prop drilling (passing props down multiple levels).
3. When state management is simple (for complex state, use Redux or Zustand).

**Keys:**
1. React Context allows global state sharing without prop drilling.
2. It uses Provider to pass data and useContext to access it.
3. It’s great for themes, auth, and global settings but not a replacement for state management libraries in complex apps.

* Problem 5: When would you want to use the useMemo hook?

**What is useMemo?**
useMemo is a React Hook that memoizes (caches) the result of an expensive computation to avoid unnecessary recalculations on re-renders.

**Why Use useMemo?**
React re-renders components whenever state or props change. If a component performs a heavy calculation on every render, it slows down performance.
👉 useMemo caches the computed result and only recalculates it when dependencies change.

**Common Use Cases for useMemo**
1. Optimizing expensive calculations:
    - Problem: Heavy computation runs on every render, even when unnecessary. 
    - Solution: Use useMemo to store the result until dependencies change.
    - Helps: The function only runs when number changes instead of running on every render.
2. Preventing Unnecessary Re-renders in Lists
    - Problem: Large lists cause performance issues when filtering or sorting frequently.
    - Solution: Use useMemo to optimize filtering.
    - The filtering logic only runs when search or users change instead of on every render.
3. Preventing Unnecessary Re-renders in Child Components
    - Problem: React re-renders child components when parent components update.
    - Use useMemo to memoize objects that are passed as props.
    - ChildComponent won’t re-render when count changes because user is memoized.

**When not to use useMemo**
1. If the computation is simple (e.g., num * 2 without heavy loops, API calls).
2. If it adds unnecessary complexity—React’s default rendering is often efficient.
3. If there’s no measurable performance improvement.

**Keys:**
1. useMemo improves performance by caching expensive calculations.
2. It recalculates only when dependencies change.
3. Best used for heavy computations, filtering large lists, and optimizing re-renders.
4. Don’t overuse it—React’s default rendering is optimized in most cases.

* Problem 6: How do you decide how to structure your components?

Structuring components properly is crucial for maintainability, reusability, and performance.

1. Follow a component-based approach: Each component should be small and focused on a single responsibility.

2. Break components into reusable & presentational components:
    - Presentational (UI) Components
        - Only focus on rendering UI.
        - Do not manage state or logic.
    - Container (Logic) Components
        - Handle data fetching, state, and business logic.
        - Pass data down to presentational components.

3. Organize components in a directory structure: 
    - ui/ → Small, reusable UI components.
    - layout/ → Structural components like Navbar and Sidebar.
    - features/ → Components tied to specific features.
    - hooks/ → Custom hooks like useAuth.
    - context/ → Context providers for global state.
    - pages/ → Page-level components (like Dashboard).
    For example:
    src/
    │── components/
    │   │── ui/            (Reused UI elements)
    │   │   ├── Button.js
    │   │   ├── Card.js
    │   │── layout/        (Layout-related components)
    │   │   ├── Navbar.js
    │   │   ├── Sidebar.js
    │   │── features/      (Business logic components)
    │   │   ├── UserList.js
    │   │   ├── UserCard.js
    │── hooks/
    │   ├── useAuth.js
    │── context/
    │   ├── AuthContext.js
    │── pages/
    │   ├── Home.js
    │   ├── Dashboard.js
    │── App.js
    │── index.js
   
4. Keep components small & focused: A component should ideally:
    - Do one thing well.
    - Be under 200 lines of code (except complex ones).
    - Be easy to test and reuse.

5. Use context or state management wisely: 
    - Use useState or useReducer for local component state.
    - Use Context API when multiple components need shared data (like authentication).
    - Use Redux/Zustand if state logic is complex (e.g., caching, global state).

6. Use hooks for reusable logic: 
    - If multiple components share logic (like fetching data), move it into a custom hook.
    - Why?
        - useFetch can be used in multiple components.
        - Avoids repeating fetching logic in every component.

**Keys**
1. Break down components into small, reusable parts.
2. Separate UI (presentational) and logic (container) components.
3. Follow a structured folder organization (e.g., components/ui, context, hooks).
4. Use Context API, Redux, or custom hooks for shared logic.
5. Keep components small, focused, and easy to maintain.
