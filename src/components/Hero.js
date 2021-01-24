import React from 'react'; 
import { Link } from 'react-router-dom'; 

// Container centers itself(not its inner content) horizontally 
// Can be nested but not necessary
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import { fade } from '@material-ui/core/styles/colorManipulator'; 


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        height: "50vh", 
        backgroundImage: "url('https://images.unsplash.com/photo-1515508268448-8d0d292bc49a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        backgroundSize: "cover"
    }, 
    title: {
        color: theme.palette.primary.dark, 
        fontWeight: 500,
        letterSpacing: '0.5px'
    }, 
    button: {
        width: "20%", 
        margin: "0 auto", 
        marginTop: "5%",
        backgroundColor: fade(theme.palette.secondary.main, 0.85),
        color: 'white',
        transition: 'all 1s',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
            //TODO move up y axis & give box shadow
        }
    }
})); 
//TODO 👆 I should abstract this to a style file with FormStyles and NavbarStyles - perhaps HeroStyles 
// Wrap using withStyles

function Hero() {
    const classes = useStyles(); 

    return(
        <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                Learn at Leitspeed
            </Typography>
            <Typography variant="h5">Remember almost anything, forever!</Typography>
            <Button 
                className={classes.button} 
                aria-label="register as a new user"
                component={Link}
                to="/login"
            >Login</Button>
        </Container>
    ); 
}

export default Hero; 

//TODO - I want the button to elevate (i.e. move up the y-axis and get a shadow) when it's hovered - add that effect 