import { CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import axios from './axiosConfig'

function App() {
  //State
  const POSTurl = '/v1/task/3'
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true)
  const [loggin, setLogin] = useState(false)

  //Fetch todos from API

  const fetchTodos = useCallback(async () => {
    //creating GETurl
    try {
      const { sorterType, filterType } = sorterFilter;
      const res = await axios.get('/tasks',{
        //SorterParams
        params: {
          headers: {'Authorization': '111'},
          filterBy: filterType,
          order: sorterType ? 'desc' : 'asc'
        }});
        setTodos(res.data);
        setIsLoading(false);
    } catch(err){
      setLogin(true)
    }

  },[sorterFilter])

  useEffect(() => {
      fetchTodos()
  }, [fetchTodos]) 

  //Action functions
  //Add Todo
  const handleSubmit = async (todo) => {
    await axios.post(POSTurl,
      {
        "name": todo,
        "done": false
      });
      await fetchTodos();
    };
    //Delete Todo
    const handleDelete = async (id) => {
      await axios.delete(`${POSTurl}/${id}`);
      await fetchTodos();
    };
    //Check Todo
    const handleCheck = async (todo) => {
      await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": todo.name,
        "done": !todo.done
      });
      await fetchTodos();
    };
  //Change Todo
  const handleTodoChange = async (todo, inputValue) => {
    await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": inputValue,
        "done": todo.done
      });
      await fetchTodos();
  };

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
      {!isLoading &&
        <ToDoList
          todos={paginateTodos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleTodoChange={handleTodoChange} />}
      {(todos.length > 5 && !isLoading) &&
        <Pagination
          totalPosts={todos.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      }
      {isLoading &&
        <Grid container alignItems='center' direction='column'>
          <Grid item><CircularProgress/></Grid>
        </Grid>
      }
    </Container>
  );
};

export default App;
