import { Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';

function App() {
  const data = [{id: 1, title: 'Hello', completed: true, date: 1},
                {id: 2, title: 'Buy', completed: false, date: 1},
                {id: 3 , title: '???', completed: true, date: 1}];

  
  const [todos, setTodos] = useState(data)
  console.log('Render');

  const handleSubmit = (todo) => {
    if(todo !== ''){
      setTodos(prev => [{id: Date.now(), title: todo.trim(), completed: false, date: Date.now()}, ...prev])
    }
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(task => task.id !== id))
  };

  const handleCheck = (id) =>{
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const filterSorter = () => {
    const newTodos = [...todos].reverse()
    setTodos(newTodos)
  }



  return (
    <Container maxWidth = 'sm'>
      <Typography variant='h1' align='center'>To Do</Typography>
      <ToDoInput handleSubmit={handleSubmit}
                 todos={todos}
                 setTodos={setTodos}
                  />
      <SorterFilter filterSorter ={filterSorter}/>
      <ToDoList todos={todos} 
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
    </Container>
  );
}

export default App;
