import { Container, Typography } from '@material-ui/core';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { SorterFilter } from './components/SorterFilter';
import { ToDoInput } from './components/ToDoInput';
import { ToDoList } from './components/ToDoList';
import axios from 'axios'

function App() {
  const GETurl = 'https://todo-api-learning.herokuapp.com/v1/tasks/3?order=desc';
  const POSTurl = 'https://todo-api-learning.herokuapp.com/v1/task/3'


  
  
  
  
  
  //State
  const [todos, setTodos] = useState([]);
  const [sorterFilter, setSorterFilter] = useState({ sorterType: true, filterType: 'All' });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchTodos()
  }, [sorterFilter])
  
  const fetchTodos = async () => {
    const res = await axios.get(sortFilter());
    setTodos(res.data);
  }

  const sortFilter = () => {
    //order= desc asc
    //filterBy= done undone
    //?
    // https://todo-api-learning.herokuapp.com/v1/tasks/3?filterBy=done&order=desc
    const {sorterType, filterType} = sorterFilter;
    const date = sorterType 
    ? 'desc'
    : 'asc'
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
    const URL = `https://todo-api-learning.herokuapp.com/v1/tasks/3?${filter}order=${date}`
    return URL
  }
  //Action functions
  const handleSubmit = async (todo) => {
      await axios.post(POSTurl,
        {
          "name": todo,
          "done": false
        })
      await fetchTodos()
  };

  const handleDelete = async (id) => {
    await axios.delete(`${POSTurl}/${id}`)
    await fetchTodos()
  };

  const handleCheck = async (todo) => {
    await axios.patch(`${POSTurl}/${todo.uuid}`,
    {
      "name": todo.name,
      "done": !todo.done
    }
    )
    await fetchTodos()
  };

  const handleTodoChange = async (todo, inputValue) => {
    await axios.patch(`${POSTurl}/${todo.uuid}`,
    {
      "name": inputValue,
      "done": todo.done
    }
    )
    await fetchTodos()
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
