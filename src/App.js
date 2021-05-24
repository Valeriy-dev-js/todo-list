import { Container, Typography } from '@material-ui/core';
import { useMemo, useState } from 'react';
import './App.css';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';

function App() {
  const data = [{ id: 1, title: 'Hello', completed: true, date: 3 },
  { id: 2, title: 'Buy', completed: false, date: 2 },
  { id: 3, title: '???', completed: true, date: 1 }];

  //State
  const [todos, setTodos] = useState(data)
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' })


  //Action functions
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

  const handleTodoChange = (id, inputValue) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.id === id)
    newTodos[index].title = inputValue
    setTodos(newTodos)
  }

  //Sorting and Filtering logic
  const resultTodos = useMemo(() => {

    const iteratingTodos = [...todos]
    const { sorterType, filterType } = sorterFilter
    //Sorting todos by date
    const sortedTodos = iteratingTodos.sort((a, b) => {
      if (sorterType){
        return b.date - a.date
      }
      return a.date - b.date})
    //Filtering todos by completed
    const filteredTodos = sortedTodos.filter(item => {
      switch(filterType){
        case 'All':
          return item;
        case 'Done':
          return item.completed === true
        default:
          return item.completed === false;
      }
    })


    return filteredTodos
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
        todos={resultTodos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleTodoChange={handleTodoChange}/>
    </Container>
  );
}

export default App;
