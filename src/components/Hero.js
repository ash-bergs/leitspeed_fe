import React from 'react'; 

import Container from '@material-ui/core/Container'; 
// Container centers itself(not its inner content) horizontally 
// Can be nested but not necessary 
//TODO I was doing this myself with the Container common component, I should get rid of that so this isn't confusing 
import { Typography, Button } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors'; 
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
        color: theme.palette.primary.dark
    }, 
    button: {
        width: "20%", 
        margin: "0 auto", 
        marginTop: "5%",
        backgroundColor: fade(theme.palette.secondary.main, 0.85),
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }
})); 

function Hero() {
    const classes = useStyles(); 

    return(
        <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                Learn at Leitspeed
            </Typography>
            <Typography variant="h5">Remember almost anything, forever!</Typography>
            <Button className={classes.button} aria-label="register as a new user">Join</Button>
        </Container>
    ); 
}

export default Hero; 