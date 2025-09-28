import { useState } from "react";

function TodoItem({ text, completed, priority }) {
    const[done, setDone] = useState(completed);

    return (
    <li>
      <button onClick={() => setDone(!done)}>
        {done ? "✅" : "⬜"}
      </button>{" "}
      {text}  {priority}
    </li>
  );
}

export default TodoItem