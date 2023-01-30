
import React, { useState} from "react";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);

    return (
        <div ClassName="Todo">
            <input
                type="checkbox"
                id={item.id}
                name={item.id}
                value={item.done}
            />
            <label id={item.id}>{item.title}</label>
        </div>
    )
}

export default Todo;