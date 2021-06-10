import { Button, Grid, TextField } from "@material-ui/core"
import { useState } from "react"
import { useSelector } from "react-redux";
import { selectIsSignup} from './authSlice'

export const Auth = ({ handleLogin, handleSignup }) => {
    const isSignup = useSelector(selectIsSignup);
    const [user, setUser] = useState({ name: '', password: '' });
    const [helperText, setHelperText] = useState('');
    
    const handleUserChange = (e) => {
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
                    onChange={e => handleUserChange(e)}
                    value={user.name}
                    label='Username'
                    required
                    fullWidth
                    variant='outlined'
                    margin='normal' />
                <TextField
                    name='password'
                    required
                    onChange={e => handleUserChange(e)}
                    value={user.password}
                    label='Password'
                    fullWidth
                    variant='outlined'
                    margin='normal'
                    type='password' />

                {isSignup
                    ? <Button
                        type='submit'
                        onClick={() => handleLogin(user)}
                        color='primary'
                        variant='contained'>Login</Button>
                    : <Button
                        type='submit'
                        onClick={() => handleSignup(user)}
                        color='secondary'
                        variant='contained'>sign up</Button>}

            </Grid>
        </form>
    )
}