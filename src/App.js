import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/Auth';
import { Container } from '@material-ui/core';
import { Header } from './components/Header';

function App() {
    const [isLogin, setIsLogin] = useState(false)
    const [signup, setSignup] = useState(false);
    const [userName, setUserName] = useState('')

    const checkToken = useCallback(() => {
        if (!localStorage.token) setIsLogin(true);
    }, []);

    useEffect(() => {
        checkToken();
    }, [checkToken]);

    return (
        <Container maxWidth='sm'>
            <Header
                userName={userName}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                signup={signup}
                setSignup={setSignup} />
            {isLogin
                ? <Auth
                    setIsLogin={setIsLogin}
                    signup={signup} />
                : <Todo
                    setUserName={setUserName}
                    setIsLogin={setIsLogin} />}
        </Container>
    );
};

export default App;