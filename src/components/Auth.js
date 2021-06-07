import { Button, ButtonGroup, Grid, TextField } from "@material-ui/core"
import { useState } from "react"
import axios from "../axiosConfig";

export const Auth = ({ setIsLogin }) => {
    const [user, setUser] = useState({ name: '', password: '' });
    console.log(user);
    const login = async () => {
        try {
            const res = await axios.post('/login', {
                'name': user.name,
                'password': user.password
            });
            console.log(res.data);
            setUser({ name: '', password: '' })
            localStorage.setItem('token', res.data.token)
            setIsLogin(false)
            
        } catch (err) {
            console.log(err.response.data);
        };
    };
    const signup = async () => {
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
            maxWidth='sm'
            direction='column'
            alignItems='center'>
            <form>
                <TextField
                    onChange={e => setUser({ ...user, name: e.target.value })}
                    value={user.name}
                    label='User Name'
                    fullWidth
                    variantnt='outlined'
                    margin='normal' />
                <TextField
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                    label='Password'
                    fullWidth
                    variantnt='outlined'
                    margin='normal'
                    type='password' />
            </form>
            <ButtonGroup>

                <Button
                    onClick={() => login()}
                    color='primary'
                    variant='contained'>Loggin</Button>
                <Button
                    onClick={() => signup()}
                    color='secondary'
                    variant='contained'>sign up</Button>
            </ButtonGroup>
        </Grid>
    )
}