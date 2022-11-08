import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { logOutUser } from '../redux/userSlice';

function Root() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn]);

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <AccountBalanceWalletTwoToneIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gastos
                    </Typography>
                    <Button
                        startIcon={<LogoutIcon />}
                        variant="text"
                        color="inherit"
                        onClick={() => dispatch(logOutUser())}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </>
    );
}

export default Root;
