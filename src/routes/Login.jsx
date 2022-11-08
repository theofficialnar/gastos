import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';

import { logInUser } from '../redux/userSlice';

function Login() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn]);

    return (
        <Grid container sx={{ minHeight: '100vh' }} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5}>
                <Paper sx={{ p: 4, textAlign: 'center' }} elevation={6}>
                    <Typography variant="h3">Welcome to Gastos!</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography sx={{ mb: 1 }} variant="subtitle1">
                        To get started, please sign in using your Google account below.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<GoogleIcon />}
                        onClick={() => dispatch(logInUser())}
                    >
                        Sign in with Google
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Login;
