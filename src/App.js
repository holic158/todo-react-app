import './App.css';
import Todo from './Todo';
import React, { useEffect, useState } from "react"
import { Container, List, Paper } from "@mui/material" 
import AddTodo from './AddTodo';
import { call } from "./service/ApiService"

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => setItem(response.data));
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
      .then((response) => setItem(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then((response) => setItem(response.data));
  }
  
  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItem(response.data));
    // setItem([...items]);
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
