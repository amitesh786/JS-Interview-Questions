// Tree Shaking in Rollup
// file: utils.js
export function sum(a, b) { return a + b; }
export function unusedFunc() { return "I am never used"; }

// file: main.js
import { sum } from './utils.js';
console.log(sum(2, 3));

// Will unusedFunc be included in the final bundle? How does Rollup handle dead code elimination?
