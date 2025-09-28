React is declarative: you describe what the UI should look like.
Vanilla JS is imperative: you instruct the DOM step by step.
React’s big power: managing complexity as apps grow.

Why Do We Need a Setup?
In vanilla JS, we could just drop a <script> tag in HTML and write code.
But React needs a bit more:

JSX (looks like HTML in JS) → browsers don’t understand it directly.
A bundler to prepare the code.
A dev server to reload changes quickly.
👉 That’s why we need tools to prepare our React code before the browser sees it.

The Tools
Node.js + npm: Like the toolbox. npm helps us install libraries.
Vite: A fast setup tool (like an instant kitchen — all ingredients prepped).
VS Code: Our editor (like Microsoft Word but for code).

Step-by-Step Setup
Step 1: Install Node.js
Go to https://nodejs.org.
Download the LTS version (long-term support).
Install it.
Check in terminal:
node -v
npm -v
Step 2: Create a New React Project with Vite
In your terminal:

npm create vite@latest react-todo-app
Choose React.
Use JavaScript (not TypeScript for now).
Go into the folder:
cd react-todo-app
npm install
npm run dev
🎉 You should see your app at http://localhost:5173.

In React, everything is a component.
A component is just a function that returns some UI (written in JSX).
JSX = JavaScript + XML-like syntax.
It looks like HTML, but it’s actually syntactic sugar for React.createElement.
Why Components Matter
Reusable: Build once, use many times.
Organized: Split big UIs into small, clear pieces.
Readable: Code is easier to follow.
Components = functions that return UI.
Write once, use anywhere with <ComponentName />.
Apps are just a tree of components.

Think of components like functions in math: they take input and return output.
In React, that input is called props (short for properties).
Props = inputs to components.
They make components reusable.
Use {} in JSX to insert dynamic values.
Destructuring props is a common pattern.

Props let us give data from outside a component.
But sometimes, a component needs to remember its own data — like whether a todo is completed, or what the user typed.

That’s what state is: React’s built-in way of storing values that can change over time.
With useState, React automatically re-renders when the state changes.

Props = external inputs.
State = component’s own memory.
useState gives you [value, setter].
Updating state (setState) triggers a re-render.

In vanilla JavaScript, we used addEventListener to “listen” for clicks, input, etc.
In React, we attach events directly in JSX with a special naming style.

Events connect user actions → state updates → UI changes.

React events use camelCase (onClick, onChange).
Attach event handler functions directly in JSX.
Events usually change state, which triggers UI updates.
No need for manual DOM manipulation.