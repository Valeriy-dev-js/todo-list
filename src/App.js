import { Container, Typography } from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';

function App() {
  const data = [{ id: 1, title: 'Hello', completed: true, date: 1 },
  { id: 2, title: 'Buy', completed: false, date: 2 },
  { id: 3, title: '???', completed: true, date: 3 }];


  const [todos, setTodos] = useState(data)
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' })

  const [filterTodos, setFilterTodos] = useState([])


  const handleSubmit = (todo) => {
    if (todo !== '') {
      setTodos(prev => [{ id: Date.now(), title: todo.trim(), completed: false, date: Date.now() }, ...prev])
    }
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(task => task.id !== id))
  };

  const handleCheck = (id) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  useEffect(() => {
    const {sortType, filterType} = sorterFilter
    const newTodos = [...todos]
    newTodos.sort((a, b) => a.id > b.id ? -1 : 1)
    setFilterTodos(newTodos)
    console.log(JSON.stringify(filterTodos, null, 2))



  }, [todos, sorterFilter])




  return (
    <Container maxWidth='sm'>
      <Typography variant='h1' align='center'>To Do</Typography>
      <ToDoInput handleSubmit={handleSubmit}
        todos={todos}
        setTodos={setTodos}
      />
      <SorterFilter 
        sorterFilter={sorterFilter} 
        setSorterFilter={setSorterFilter} />
      <ToDoList 
        todos={todos}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
