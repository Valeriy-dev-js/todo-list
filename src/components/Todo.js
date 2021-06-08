import { CircularProgress, Grid } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { SorterFilter } from './SorterFilter';
import { ToDoInput } from './ToDoInput';
import { ToDoList } from './ToDoList';
import axios from '../axiosConfig'

export const Todo = ({ setUserName, setIsLogin }) => {
  //State
    const POSTurl = 'task'
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [pagesCount, setPagesCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);


  //Fetch todos from API

  const fetchTodos = useCallback(async () => {
    //creating GETurl
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { sorterType, filterType } = sorterFilter;
      const res = await axios.get('/tasks', {
        //SorterParams
        params: {
          filterBy: filterType,
          order: sorterType ? 'desc' : 'asc',
          curentPage: currentPage,
          limit: postsPerPage
        }
      });
      setTodos(res.data.tasks);
      setPagesCount(res.data.pagesCount)
      setIsLoading(false);
      setUserName(res.data.userName);
    } catch (err) {
      const message = err.response.data.message;
      if (message === 'Incorrect token') {
        localStorage.removeItem('token')
        setIsLogin(true)
      };
    }

  }, [sorterFilter, setUserName, currentPage, postsPerPage, setIsLogin])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  //Action functions
  //Add Todo
  const handleSubmit = async (todo) => {
    await axios.post(POSTurl,
      {
        name: todo,
        done: false
      });
    await fetchTodos();
  };
  //Delete Todo
  const handleDelete = async (uuid) => {
    await axios.delete(`${POSTurl}/${uuid}`);
    await fetchTodos();
  };
  //Check Todo
  // const handleCheck = async ({ name, done, uuid }) => {
  //   await axios.patch(`${POSTurl}/${uuid}`,
  //     {
  //       name,
  //       done: !done
  //     });
  //   await fetchTodos();
  // };
  // //Change Todo
  const handleTodoChange = async ({name, done, uuid}) => {
    await axios.patch(`${POSTurl}/${uuid}`,
      {
        name,
        done
      });
    await fetchTodos();
  };

  return (
    <>
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
          todos={todos}
          // handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleTodoChange={handleTodoChange} 
          />}
      {(pagesCount > 1 && !isLoading) &&
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      }
      {isLoading &&
        <Grid container alignItems='center' direction='column'>
          <Grid item><CircularProgress /></Grid>
        </Grid>
      }
    </>
  );
};
