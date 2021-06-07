import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/Auth';
import { Container, Typography } from '@material-ui/core';

function App() {
    const [isLogin, setIsLogin] = useState(false)

    const setToken = useCallback(()=> {
        if(!localStorage.token) setIsLogin(true)
    }, [])

    useEffect(() =>{
        setToken()
    });

    return (
        <Container >
        <Typography variant='h1' align='center'>To Do</Typography>
        {isLogin
        ? <Auth setIsLogin={ setIsLogin } />
        : <Todo />}
        </Container>
    )
}

export default App;