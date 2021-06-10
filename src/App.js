import { useCallback, useLayoutEffect } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/auth/Auth';
import { Container } from '@material-ui/core';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, toggleAuth } from './components/auth/authSlice';
import { decode } from 'jsonwebtoken';

function App() {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const checkToken = useCallback(() => {
        if (!localStorage.token) return
        const data = decode(localStorage.token)?.exp
        if (Date.now() > data) dispatch(toggleAuth());
    }, [ dispatch ]);
    useLayoutEffect(() => {
        checkToken();
    }, [ checkToken ]);

    return (
        <Container maxWidth='sm'>
            <Header />
            {!isAuth
                ? <Auth />
                : <Todo />}
        </Container>
    );
};

export default App;