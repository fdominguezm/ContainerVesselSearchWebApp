import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from 'C:\\Users\\fdominguezmac\\Documents\\Reportal Software Stuff\\WEB-APP\\material-ui-next\\styles\\Navbar.module.css'
import Image from 'next/image';


const Navbar = () => {

    return (
    
        <AppBar position="static"
                className={styles.navBar}
            
                >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Image src="/logo.jpg" className={styles.img} height="80" width="80"/>
                    <Typography className={styles.title}>
                    Seald Sweet International
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
);
};

export default Navbar;