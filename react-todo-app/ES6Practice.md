<!-- Vanilla style given change to ES6 style -->
<!-- Variables Rewrite this code using let or const properly:-->
var app = "Todo+";
var count = 0;
count = count + 1;

<!-- ES6 variables -->
const app = "Todo+";
let count = 0;
count = count + 1;

<!--Arrow function : Convert this function into an arrow function with an implicit return:-->
function triple(n) {
  return n * 3;
}

const triple = n => n * 3;

<!-- E3. Template literals
Rewrite this using backticks and ${} syntax: -->
const name = "Mona";
const tasks = 3;
const msg = "Hello " + name + ", you have " + tasks + " tasks.";

const name = "Mona";
const tasks = 3;
const msg = `Hello ${name}, you have ${tasks} tasks.`;

<!-- E4. Object destructuring
Use destructuring to pull text and completed into variables: -->
const todo = { id: "t1", text: "Learn ES6", completed: false };

const {text, completed} = todo

<!-- E5. Array destructuring
Extract the first two items into a and b, and put the rest in others: -->
const arr = [10, 20, 30, 40];

const [a, b, ...others] = arr

<!-- M1. Spread (arrays)
Add "React" to the end of the array without mutating the original: -->
const topics = ["HTML","CSS","JS"];
const newtopics = [...topics, "React"]


<!-- M2. Spread (objects)
Combine these objects into a new one without mutation: -->
const base = { theme: "light", items: 0 };
const override = { items: 3 };

const result = {...base, ...override};

<!-- M3. Map (labels)
Return a new array of strings showing checkboxes for completed todos: -->
const todos = [
  { id: "a", text: "Read",  completed: false },
  { id: "b", text: "Cook",  completed: true  },
];

const result = todos.map(t => `${t.completed ? "[x]" : "[]"}${t.text}`]


<!-- M4. Filter (remove by id)
Remove the todo with id "b" without mutating the original: -->
const todos = [
  { id: "a", text: "Read" },
  { id: "b", text: "Cook" },
  { id: "c", text: "Sleep" },
];

const result = todos.filter(t => t.id !== "b");


<!-- M5. Toggle (map + spread)
Flip the completed value for the todo with id "a": -->
const todos = [
  { id: "a", text: "Read", completed: false },
  { id: "b", text: "Cook", completed: true  },
];

const result = todos.map(t =>
  t.id === "a" ? { ...t, completed: !t.completed } : t
);

<!-- M6. Rest (object)
Remove the secret field while keeping the rest of the object: -->
const user = { id: 1, name: "Sara", secret: "xyz" };

const { secret, ...publicInfo } = user;
const result = publicInfo;

<!-- H1. Normalize text
Return a new array where each todo’s text is trimmed and lower-cased: -->
const todos = [
  { id: "a", text: "  Learn  " },
  { id: "b", text: " ES6 " },
];

const result = todos.map(t => ({ ...t, text: t.text.trim().toLowerCase() }));

<!--H2. Add unique todo
Write a function addUnique(todos, text) that:  -->
const addUnique = (todos, text) => {
  const clean = text.trim();
  if (!clean) return todos;

  const exists = todos.some(t => t.text.toLowerCase() === clean.toLowerCase());
  if (exists) return todos;

  const newTodo = {
    id: (crypto?.randomUUID?.() || Date.now().toString()),
    text: clean,
    completed: false,
  };
  return [...todos, newTodo];
};


<!-- H3. Replace by id
Write a function replaceById(list, id, patch) that returns a new list where the item with the given id is replaced by merging in the patch object. -->

const replaceById = (list, id, patch) =>
  list.map(item => (item.id === id ? { ...item, ...patch } : item));


<!-- H4. Chain helpers
Given this array: -->
const todos = [
  { id: "a", text: "react",    completed: false },
  { id: "b", text: "cooking",  completed: true  },
  { id: "c", text: "reading",  completed: false },
];

const result = todos
  .filter(t => !t.completed)
  .map(t => t.text.toUpperCase())
  .sort(); // ["REACT", "READING"]

<!-- H5. Safe access & defaults
Using optional chaining (?.) and nullish coalescing (??), get the user’s name safely or return "Guest" if it doesn’t exist: -->
const data = { user: { profile: { name: "Mido" } } };

const name = data?.user?.profile?.name ?? "Guest";
