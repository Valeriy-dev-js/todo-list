import { Button, Grid, TextField } from "@material-ui/core"
import { useState } from "react"
import axios from "../axiosConfig";

export const Auth = ({ setIsLogin, signup }) => {
    const [user, setUser] = useState({ name: '', password: '' });
    const [helperText, setHelperText] = useState('');
    const login = async () => {
        try {
            const res = await axios.post('/login', {
                name: user.name,
                password: user.password
            });
            setUser({ name: '', password: '' });
            const token = res.data.token;
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setIsLogin(false);

        } catch (err) {
            const message = err.response.data.message;
            setHelperText(message);
        };
    };
    const signUp = async () => {
        try {
            await axios.post('/signup', {
                name: user.name,
                password: user.password
            });
            // login()
        } catch (err) {
            const message = err.response.data.message;
            setHelperText(message);
        };
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
        setHelperText('');
    }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <Grid
                container
                direction='column'
                alignItems='center'>
                <TextField
                    name='name'
                    error={helperText !== ''}
                    helperText={helperText}
                    onChange={e => handleChange(e)}
                    value={user.name}
                    label='Username'
                    required
                    fullWidth
                    variant='outlined'
                    margin='normal' />
                <TextField
                    name='password'
                    required
                    onChange={e => handleChange(e)}
                    value={user.password}
                    label='Password'
                    fullWidth
                    variant='outlined'
                    margin='normal'
                    type='password' />

                {signup
                    ? <Button
                        type='submit'
                        onClick={() => login()}
                        color='primary'
                        variant='contained'>Login</Button>
                    : <Button
                        type='submit'
                        onClick={() => signUp()}
                        color='secondary'
                        variant='contained'>sign up</Button>}

            </Grid>
        </form>
    )
}