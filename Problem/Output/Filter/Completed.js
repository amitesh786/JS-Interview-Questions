// 6. Filter Completed Tasks

const tasks = [
  { task: "Do laundry", completed: true },
  { task: "Buy groceries", completed: false },
  { task: "Clean room", completed: true },
];

const completedTasks = tasks.filter((task) => task.completed);

console.log(completedTasks);

// Output: [{ task: "Do laundry", completed: true }, { task: "Clean room", completed: true }]

// Explanation: Filters tasks where completed is true.
