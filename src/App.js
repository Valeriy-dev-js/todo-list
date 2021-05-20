import { Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import { Sorter } from './components/Sorter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';

function App() {

  const data =[{id: 1, title: 'Hello', completed: true},
               {id: 2, title: 'Buy', completed: false},
               {id: 3 , title: '???', completed: true}]

  const [todo, setTodo] = useState('')
  const handleChange = ({target}) => {
    setTodo(target.value)
  };
  
  const [todos, setTodos] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(todo !== ''){
      setTodos(prev => [{id: Date.now(), title: todo.trim(), completed: false}, ...prev])
      setTodo('')
    }
    console.log(todos);
  };

  const handlDelete = (targetId) => {
    console.log("Target", targetId);
    // setTodos(prev => prev.filter(task => task.id !== targetId))
  };


  return (
    <Container maxWidth = 'sm'>
      <Typography variant='h1' align='center'>To Do</Typography>
      <ToDoInput handleChange={handleChange}
                 handleSubmit={handleSubmit}
                 value ={todo} />
                 <h1>1.{todo}</h1>
      <Sorter />
      <ToDoList todos={todos} handelDelete={handlDelete}/>
    </Container>
  );
}

export default App;
