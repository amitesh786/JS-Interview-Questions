//  Combining Default Values & Nested Destructuring

// Question: What will be the output?

function getSettings({
  theme = "light",
  layout: { sidebar = true } = {},
} = {}) {
  console.log(`Theme: ${theme}, Sidebar: ${sidebar}`);
}
getSettings();
getSettings({ theme: "dark" });
getSettings({ layout: { sidebar: false } });

//   Answer:

//   "Theme: light, Sidebar: true"
//   "Theme: dark, Sidebar: true"
//   "Theme: light, Sidebar: false"

// Explanation:

// If layout is missing, it defaults to {} to avoid errors.
// If sidebar is missing, it defaults to true.
