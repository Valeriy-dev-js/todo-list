import { useCallback, useLayoutEffect } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/auth/Auth';
import { Container, Snackbar } from '@material-ui/core';
import { Header } from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, toggleAuth } from './components/auth/authSlice';
import { decode } from 'jsonwebtoken';
import axios from './axiosConfig'
import { selectAlert, setIsAlert } from './app/alertSlice'
import { Alert, AlertTitle } from '@material-ui/lab';

function App() {

    const alert = useSelector(selectAlert);
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
        localStorage.setItem('name', name);
        dispatch(toggleAuth());
    };
    const handleSignup = async ({ name, password }) => {
        await axios.post('/signup', { name, password });
        handleLogin({ name, password });
    };
    const handleSignout = () => {
        localStorage.clear();
        dispatch(toggleAuth());
    }
    const handleClose = () => {
        dispatch(setIsAlert(false));
    };

    return (
        <Container maxWidth='sm'>
            <Header
                handleSignout={handleSignout} />
            {isAuth
                ? <Auth
                    handleLogin={handleLogin}
                    handleSignup={handleSignup} />
                : <Todo />}
            <Snackbar 
                onClose={handleClose}
                open={alert.isAlert}
                autoHideDuration={3000} >
                <Alert
                    severity="error" >
                    <AlertTitle>
                        {`Status code ${alert.status}`}
                    </AlertTitle>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default App;