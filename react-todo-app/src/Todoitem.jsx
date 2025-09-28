import { useState } from "react";

function TodoItem({ id ,text, completed, priority, deleteTodo }) {
    const[done, setDone] = useState(completed);

    return (
    <li>
      <button onClick={() => setDone(!done)}>
        {done ? "✅" : "⬜"}
      </button>{" "}
      {text}  {priority} {" "}
      <button onClick={() => deleteTodo(id)} style={{ color: "red" }}>Delete</button>
    </li>
  );
}

function TodoList(){
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false, priority: "high" },
    { id: 2, text: "Practice ES6", completed: true, priority: "medium" },
  ]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          priority={todo.priority}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;