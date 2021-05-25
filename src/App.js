import { Container, Typography } from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import axios from 'axios'

function App() {
  const data = [{ id: 1, title: 'Hello', completed: true, date: 3 },
  { id: 2, title: 'Buy', completed: false, date: 2 },
  { id: 3, title: '???', completed: true, date: 1 }];


  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('https://todo-api-learning.herokuapp.com/v1/tasks/3')
      console.log(JSON.stringify(res.data, null, 2));
      setTodos(res.data)
    }
    fetchTodos()
  }, [])





  //State
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  //Action functions
  const handleSubmit = (todo) => {
    if (todo !== '') {
      setTodos(prev => [{ id: Date.now(), title: todo.trim(), completed: false, date: Date.now() }, ...prev])
    };
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(task => task.id !== id));
  };

  const handleCheck = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleTodoChange = (id, inputValue) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].title = inputValue;
    setTodos(newTodos);
  };

  //Sorting and Filtering logic
  // const sortFiltTodos = useMemo(() => {
  //   const iteratingTodos = [...todos];
  //   const { sorterType, filterType } = sorterFilter;

  //   //Sorting todos by date
  //   const sortedTodos = iteratingTodos.sort((a, b) => {
  //     if (sorterType) {
  //       return b.date - a.date;
  //     }
  //     return a.date - b.date;
  //   });

  //   //Filtering todos by completed
  //   const filteredTodos = sortedTodos.filter(item => {
  //     switch (filterType) {
  //       case 'All':
  //         return item;
  //       case 'Done':
  //         return item.completed === true;
  //       default:
  //         return item.completed === false;
  //     }
  //   })
  //   return filteredTodos;
  // }, [todos, sorterFilter]);

//Paagination logic
  const paginateTodos = useMemo(() => {
    const APItodos = [...todos]
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = APItodos.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  }, [currentPage, postsPerPage, todos]);

  return (
    <Container maxWidth='sm'>
      <Typography variant='h1' align='center'>To Do</Typography>
      <ToDoInput handleSubmit={handleSubmit}
        todos={todos}
        setTodos={setTodos}
      />
      <SorterFilter
        sorterFilter={sorterFilter}
        setSorterFilter={setSorterFilter}
        setCurrentPage={setCurrentPage} />
      <ToDoList
        todos={paginateTodos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleTodoChange={handleTodoChange} />
      {(todos.length > 5) &&
        <Pagination
        totalPosts={todos.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
        }
    </Container>
  );
};

export default App;
