
import React, { useState} from "react";
import { ListItem, ListItemText, inputBase, Checkbox, InputBase, ListItemSecondaryAction } from "@mui/material"
import { DeleteOutlined } from "@mui/icons-material";

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if (e.key === "enter" && readOnly === false) {
            setReadOnly(true);
            editItem(item);
        }
    }

    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    }

    const checkboxEventHandler = (e) => {
        console.log('checkboxEventHandler',e)
        item.done = e.target.checked;
        editItem(item);
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked"}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction aria-label="Delete Todo" onClick={deleteEventHandler}>
                <DeleteOutlined />
            </ListItemSecondaryAction>            
        </ListItem>
    )
}

export default Todo;