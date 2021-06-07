import { Button, Grid, Typography } from "@material-ui/core"

export const Header = ({ isLogin, signup, setSignup}) => {
    return (
        <Grid
            container
            alignItems='center'
            justify='space-between'>
            <Grid item sx={8}>
                <Typography variant='h3' align='center'>To Do</Typography>
            </Grid>
            {isLogin
                ? <Grid>
                    {signup
                        ? <Button
                            color='secondary'
                            variant='contained'
                            onClick={() => setSignup(false)}>
                            sign up
                            </Button>
                        : <Button
                            color='primary'
                            variant='contained'
                            onClick={() => setSignup(true)}>
                            login
                </Button>}
                </Grid>
                : <Grid item xs={4}>
                    <Grid
                        container
                        alignItems='center'
                        justify='space-between'>
                        <Typography>
                            USER
                    </Typography>
                        <Button
                            color='primary'
                            variant='contained'>
                            Signout
                    </Button>
                    </Grid>
                </Grid>}
        </Grid>
    )
}