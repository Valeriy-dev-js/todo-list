import { CircularProgress, Grid} from '@material-ui/core';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pagination } from './Pagination';
import { SorterFilter } from './SorterFilter';
import { ToDoInput } from './ToDoInput';
import { ToDoList } from './ToDoList';
import axios from '../axiosConfig'

export const Todo =() => {
  //State
  const POSTurl = 'task'
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem('token')
  const headers = useMemo(() => {
    return {'Authorization': `Bearer ${token}`}
  },[token]) 

  //Fetch todos from API

  const fetchTodos = useCallback(async () => {
    //creating GETurl
    try {
      const { sorterType, filterType } = sorterFilter;
      const res = await axios.get('/tasks',{
        //SorterParams
        params: {
          filterBy: filterType,
          order: sorterType ? 'desc' : 'asc'
        },
        headers : headers});
        setTodos(res.data.Tasks);
        setIsLoading(false);
    } catch(err){
    }

  },[sorterFilter, headers])

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
      },
      {headers: headers});
      await fetchTodos();
    };
    //Delete Todo
    const handleDelete = async (uuid) => {
      await axios.delete(`${POSTurl}/${uuid}`, {headers: headers});
      await fetchTodos();
    };
    //Check Todo
    const handleCheck = async (todo) => {
      await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": todo.name,
        "done": !todo.done
      },
      {headers: headers});
      await fetchTodos();
    };
  //Change Todo
  const handleTodoChange = async (todo, inputValue) => {
    await axios.patch(`${POSTurl}/${todo.uuid}`,
      {
        "name": inputValue,
        "done": todo.done
      },
      {headers: headers});
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
    </>
  );
};
