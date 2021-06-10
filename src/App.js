import { useCallback, useLayoutEffect } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/auth/Auth';
import { Container } from '@material-ui/core';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, toggleAuth } from './components/auth/authSlice';
import { decode } from 'jsonwebtoken';
import axios from './axiosConfig'
import { selectAlert } from './app/alertSlice'

function App() {
    const alert = useSelector(selectAlert);
    console.log(alert);
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const checkToken = useCallback(() => {
        if (!localStorage.token) return
        const data = decode(localStorage.token)?.exp
        if (Date.now() > data) dispatch(toggleAuth());
    }, [dispatch]);
    useLayoutEffect(() => {
        checkToken();
    }, [checkToken]);

    const handleLogin = async ({ name, password }) => {
        const res = await axios.post('/login', { name, password });
        const token = res.data.token;
        localStorage.setItem('token', token);
        dispatch(toggleAuth());
    };
    const handleSignup = async ({ name, password }) => {
        await axios.post('/signup', { name, password });
        handleLogin({ name, password });  
    };
    const handleSignout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        dispatch(toggleAuth())
    }

    return (
        <Container maxWidth='sm'>
            <Header
                handleSignout={handleSignout} />
            {isAuth
                ? <Auth
                    handleLogin={handleLogin}
                    handleSignup={handleSignup} />
                : <Todo />}
        </Container>
    );
};

export default App;