import { Button, ButtonGroup, Grid, TextField } from "@material-ui/core"
import { useState } from "react"
import axios from "../axiosConfig";

export const Auth = ({ setIsLogin, signup}) => {
    const [user, setUser] = useState({ name: '', password: '' });
    const login = async () => {
        try {
            const res = await axios.post('/login', {
                'name': user.name,
                'password': user.password
            });
            setUser({ name: '', password: '' })
            localStorage.setItem('token', res.data.token)
            setIsLogin(false)
            
        } catch (err) {
            console.log(err.response.data);
        };
    };
    const signUp = async () => {
        try {
            await axios.post('/signup', {
                'name': user.name,
                'password': user.password
            });
            login()
        } catch (err) {
            console.log(err.response.data);
        };
    };
    return (
        <Grid
            container
            direction='column'
            alignItems='center'>
            <form>
                <TextField
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    value={user.name}
                    label='User Name'
                    fullWidth
                    variant='outlined'
                    margin='normal' />
                <TextField
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    label='Password'
                    fullWidth
                    variant='outlined'
                    margin='normal'
                    type='password' />
            </form>
            <ButtonGroup>
                {signup
                ?<Button
                    onClick={() => login()}
                    color='primary'
                    variant='contained'>Login</Button>
                :<Button
                    onClick={() => signUp()}
                    color='secondary'
                    variant='contained'>sign up</Button>}
            </ButtonGroup>
        </Grid>
    )
}