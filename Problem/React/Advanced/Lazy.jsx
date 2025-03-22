// What is lazy loading in React using React.lazy and Suspense?

import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

const App = () => (
  <Suspense fallback={<h2>Loading...</h2>}>
    <LazyComponent />
  </Suspense>
);

export default App;

// Lazy loading is a performance optimization technique that loads components only when they are needed rather than all at once. 
// This reduces the initial load time of the application.

// Dynamically imports LazyComponent when it is actually rendered.
// Prevents the component from being included in the initial JavaScript bundle.

// Suspense with fallback
// Wraps the LazyComponent inside Suspense, which provides a fallback UI (e.g., "Loading...") until the component loads.

// Lazy loading improves performance by loading components only when needed.
