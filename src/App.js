import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/auth/Auth';
import { Container } from '@material-ui/core';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, toggleAuth } from './components/auth/authSlice'

function App() {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const checkToken = useCallback(() => {
        if (localStorage.token) dispatch(toggleAuth());
    }, [dispatch]);
    // useLayoutEffect
    useLayoutEffect(() => {
        checkToken();
    }, [checkToken]);

    return (
        <Container maxWidth='sm'>
            <Header />
            {isAuth
                ? <Auth />
                : <Todo />}
        </Container>
    );
};

export default App;