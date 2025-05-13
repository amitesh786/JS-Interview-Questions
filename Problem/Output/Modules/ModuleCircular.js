// Question 5: Circular Dependencies

// file: a.js
const b = require('./b');
module.exports = { name: "Module A", b };

// file: b.js
const a = require('./a');
module.exports = { name: "Module B", a };

// file: main.js
const a = require('./a');
console.log(a.b.name);

// What will be the output? How does Node.js handle circular dependencies?
