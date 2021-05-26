import { CircularProgress, Container, Grid, Snackbar, Typography } from '@material-ui/core';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import axios from './axiosComfig'
import { Alert } from '@material-ui/lab';

function App() {
  // const [alert, setAlert] = useState({})
  
  const POSTurl = 'https://todo-api-learning.herokuapp.com/v1/task/3'
  //State
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true)
  //Fetch todos from API

  useEffect(() => {
    const fetchTodos = async () => {
      //creating GETurl
      const { sorterType, filterType } = sorterFilter;
      //Sort param
      const date = sorterType
      ? 'desc'
      : 'asc'
      //Filter Param
      let filter
      switch (filterType) {
        case 'All':
          filter = '';
          break;
        case 'Done':
          filter = 'filterBy=done&';
          break;
          default:
            filter = 'filterBy=undone&'
      }
      const URL = `/v1/tasks/3?${filter}order=${date}`
      
      const res = await axios.get(URL)
      setTodos(res.data);
      setIsLoading(false);
    }
    fetchTodos()
  
  }, [sorterFilter])

  

  //Action functions
  //Add Todo
  const handleSubmit = async (todo) => {
    await axios.post(POSTurl,
      {
        "name": todo,
        "done": false
      });
      // await fetchTodos();
    };
    //Delete Todo
    const handleDelete = async (id) => {
      await axios.delete(`${POSTurl}/${id}`);
    };
    //Check Todo
    const handleCheck = async (todo) => {
      await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": todo.name,
        "done": !todo.done
      });
    };
  //Change Todo
  const handleTodoChange = async (todo, inputValue) => {
    await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": inputValue,
        "done": todo.done
      });
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
      {/* <Snackbar open={alert.open} autoHideDuration={2000}>
        <Alert severity="error">
          {`Status: ${alert.status} 
            Message: ${alert.message}`}
        </Alert>
      </Snackbar> */}
    </Container>
  );
};

export default App;
