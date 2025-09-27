function TodoItem({ text, completed, priority }) {
  return (
    <li>
      {completed ? "✅" : "⬜"} {text} {priority}
    </li>
  );
}

export default TodoItem