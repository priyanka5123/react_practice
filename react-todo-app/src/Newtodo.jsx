import { useState } from "react";

function EmptyState() {
  return <p>No tasks today!</p>;
}

function TodoItem({ id, text, completed, priority, toggleTodo, deleteTodo }) {
  return (
    <li className="todo">
      <label className="todo__left">
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span
          className="todo__title"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {text} ({priority})
        </span>
      </label>
      <button
        className="icon-btn"
        title="Delete"
        onClick={() => deleteTodo(id)}
      >
        ×
      </button>
    </li>
  );
}

function Newtodo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false, priority: "high" },
    { id: 2, text: "Practice ES6", completed: true, priority: "medium" },
  ]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");

  //  Add Todo
  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
      priority,
    };
    setTodos((prev) => [...prev, newItem]);
    setText("");
    setPriority("medium");
  };

  //  Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle Completed
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter Logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);
  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="title">My Todo App</h1>
        <p className="subtitle">Tasks will go here...</p>
      </header>

      {/* Add Form */}
      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="input"
          placeholder="Add a task…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginLeft: "8px" }}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {/* Toolbar */}
      <section className="toolbar">
        <div className="filters">
          <button
            className={`chip ${filter === "all" ? "chip--active" : ""}`}
            onClick={() => setFilter("all")}
            type="button"
          >
            All
          </button>
          <button
            className={`chip ${filter === "active" ? "chip--active" : ""}`}
            onClick={() => setFilter("active")}
            type="button"
          >
            Active
          </button>
          <button
            className={`chip ${filter === "completed" ? "chip--active" : ""}`}
            onClick={() => setFilter("completed")}
            type="button"
          >
            Completed
          </button>
        </div>
        <span className="counter">{remaining} left</span>
      </section>

      {/* Todo List Display */}
      {todos.length === 0 ? (
        <EmptyState />
      ) : allCompleted ? (
        <p>🎉 Good job! All tasks completed.</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Newtodo;
