import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <AppBar position='static' sx={{ backgroundColor: "black", }}>
            <Toolbar>
                <Box sx={{ marginRight: "auto", }}>
                    <Button color='inherit' onClick={() => navigate("/")}>
                        <Typography variant='h4'>LBREP</Typography>
                    </Button>
                </Box>
                <Box>

                    <Button color='inherit' sx={{ marginRight: "2rem", }} onClick={() => navigate("/listings")}>
                        <Typography variant='h6'>Listings</Typography>
                    </Button>
                    <Button color='inherit' sx={{ marginLeft: "2rem", }}>
                        <Typography variant='h6'>Agencies</Typography>
                    </Button>
                </Box>
                <Box sx={{ marginLeft: "auto", marginRight: "10rem", }}>
                    <Button sx={{ backgroundColor: "green", color: "white", width: "15rem", fontSize: "1.1rem", marginRight: "1rem", "&:hover": { backgroundColor: "blue" } }}>
                        Add Property
                    </Button>
                    <Button onClick={() => navigate("/login")} sx={{ backgroundColor: "white", color: "black", width: "15rem", fontSize: "1.1rem", marginLeft: "1rem", "&:hover": { backgroundColor: "green" } }}>
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header