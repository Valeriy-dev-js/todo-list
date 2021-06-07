import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Auth } from './components/Auth';

function App() {
    const [isLoggin, setIsLogin] = useState(false)
    console.log(234);

    const token = useCallback(()=> {
        if(!localStorage.token) setIsLogin(true)
    }, [])

    useEffect(() =>{
        token()
    });

    return (
        <>
        {isLoggin
        ? <Auth />
        : <Todo />}
        </>
    )
}

export default App;