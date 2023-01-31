import './App.css';
import Todo from './Todo';
import React, { useState } from "react"
import { Container, List, Paper } from "@mui/material" 
import AddTodo from './AddTodo';

function App() {
  const [items, setItem] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItem([...items, item]);
    console.log("items ", items);
  };

  const deleteItem = (item) => {
    const newItems = items.filter(e => e.id !== item.id);
    setItem([...newItems]);
  }
  
  const editItem = () => {
    setItem([...items]);
  }
  
  let todoItems = items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item, idx) => (
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem}/>
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
