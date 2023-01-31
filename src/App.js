import './App.css';
import Todo from './Todo';
import React, { useState } from "react"
import { Container, List, Paper } from "@mui/material" 
import AddTodo from './AddTodo';

function App() {
  const [items, setItem] = useState([
    {
      id: "0",
      title: "Hello world1",
      done: false,
    },
    {
      id: "1",
      title: "Hello world2",
      done: false,
    }
  ]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItem([...items, item]);
    console.log("items ", items);
  };

  const deleteItem = (item) => {
    const thisItems = items;
    console.log(thisItems);
    console.log(item);
    const newItems = thisItems.filter((e)=> e.id !== item.id);
    console.log(newItems);
    setItem(...newItems, item);
  }
  
  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item, idx) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem}/>
        ))};
      </List>
    </Paper>
  )                
  return (<div className="App">
            <Container maxWidth="md">
              <AddTodo addItem={addItem} />
              <div className='TodoList'>{todoItems}</div>
            </Container>
          </div>);
}

export default App;
