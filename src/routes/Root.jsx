import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link as RouterLink, Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Gastos
                    </Typography>
                    <Button variant="text" component={RouterLink} to="/" color="inherit">
                        Home
                    </Button>
                    <Button component={RouterLink} to="/about" color="inherit">
                        About
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    );
}

export default Root;
