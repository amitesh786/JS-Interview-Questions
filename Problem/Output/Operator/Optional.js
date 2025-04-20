// What will be the output ?

let person = { name: { surname: "Singh" }};
console.log(person?.name?.surname?.test ?? "Amitesh");

// ?. (optional chaining) prevents errors when accessing deeply nested properties.

// ?? (nullish coalescing) provides a fallback if the value is null or undefined.

// Since person.name.surname is "Singh" (a string), and "Singh".middle is undefined, we fall back to "Amitesh".
