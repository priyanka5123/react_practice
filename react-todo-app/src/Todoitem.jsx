import { useState } from "react";

function EmptyState() {
  return <p>"No tasks today!"</p>;
}

function TodoItem({ id ,text, completed, priority,toggleTodo, deleteTodo }) {

    return (
    <li>
      <button onClick={() => toggleTodo(id)}>
        {completed ? "✅" : "⬜"}
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

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div>
      {todos.length === 0 ? <EmptyState /> : 
      allCompleted ? <p>🎉 Good job! All tasks completed.</p> :
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            priority={todo.priority}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      }
    </div>
  );
}

export default TodoList;