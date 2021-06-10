import { Button, Grid, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignup, selectIsAuth, toggleSignup } from './auth/authSlice'


export const Header = ({ handleSignout }) => {
    const isAuth = useSelector(selectIsAuth)
    const isSignup = useSelector(selectIsSignup);
    const dispatch = useDispatch();
    const name = localStorage.getItem('name')

    return (
        <Grid
            container
            alignItems='center'
            justify='space-between'>
            <Grid item sx={8}>
                <Typography variant='h3' align='center'>To Do</Typography>
            </Grid>
            {isAuth
                ? <Grid>
                    <Button
                        color={isSignup ? 'secondary' : 'primary'}
                        variant='contained'
                        onClick={() => dispatch(toggleSignup())}>
                        {isSignup ? 'sign up' : 'login'}
                    </Button>

                </Grid>
                : <Grid item xs={4}>
                    <Grid
                        container
                        alignItems='center'
                        justify='space-between'>
                        <Typography>
                            {name}
                        </Typography>
                        <Button
                            onClick={() => handleSignout()}
                            color='primary'
                            variant='contained'>
                            Signout
                    </Button>
                    </Grid>
                </Grid>}
        </Grid>
    )
}