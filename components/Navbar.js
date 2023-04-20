import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styles from '@/styles/Home.module.css'


const Navbar = () => {

    return (
    
        <AppBar position="static"
                className={styles.primaryColor}
                >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <img src="../logo.jpg" className={styles.img} height="80" width="80"/>
                    <Typography className={styles.title}>
                    Seald Sweet International
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
);
};

export default Navbar;