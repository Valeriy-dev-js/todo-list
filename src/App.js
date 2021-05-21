import { Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import { Sorter } from './components/Sorter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';

function App() {
  console.log('Render App');
  const data =[{id: 1, title: 'Hello', completed: true},
               {id: 2, title: 'Buy', completed: false},
               {id: 3 , title: '???', completed: true}]

  
  const [todos, setTodos] = useState(data)
  const handleSubmit = (todo) => {
    console.log(todo)
    if(todo !== ''){
      setTodos(prev => [{id: Date.now(), title: todo.trim(), completed: false}, ...prev])
    }
    console.log(todos);
  };

  const handlDelete = (id) => {
    setTodos(prev => prev.filter(task => task.id !== id))
  };

  const handleCheck = (id) =>{    
      console.log(id);
      todos.map(e => console.log(e))
      // setTodos(prev => prev.map(task => console.log(task)))
      setTodos(prev => prev.reverse())
  }


  return (
    <Container maxWidth = 'sm'>
      <Typography variant='h1' align='center'>To Do</Typography>
      <ToDoInput handleSubmit={handleSubmit}
                 todos={todos}
                 setTodos={setTodos}
                  />
      <Sorter />
      <ToDoList todos={todos} 
                handlDelete={handlDelete}
                handleCheck={handleCheck}/>
    </Container>
  );
}

export default App;
