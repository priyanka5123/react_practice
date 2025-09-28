import { useState } from "react";

function Lists() {
    const [lists, setlists] = useState([
        {id: 1, text: "Eat"},
        {id: 2, text: "Sleep"},
        {id: 3, text: "Code"},
    ])

    return (
        <ul>
            {lists.map(list =>(
                <li key={list.id}>
                    {list.id} {list.text}
                </li>
            ))}
        </ul>
    )
}

export default Lists