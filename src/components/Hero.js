import React from 'react'; 
import { Link } from 'react-router-dom'; 
//* material ui components 
import { CssBaseline, Box, Typography, Button } from '@material-ui/core';
// * material ui hooks
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../styles/LandingStyles'; 

function Hero({ classes }) {

    return(
        <Box className={classes.root}>
        {/* //? CssBaseline does... what? It removes the border and padding - affects the box-model? */}
            <CssBaseline />
            <Typography className={classes.title}>LeitSpeed</Typography>
            <Typography className={classes.subtitle}>Study more effectively and forget less</Typography>
            <Button className={classes.button} 
                aria-label="register as a new user"
                component={Link}
                to="/login"    
            >Register</Button>
        </Box>
    ); 
}

export default withStyles(styles)(Hero); 

/* ----------------------------- Hero re-degisn ----------------------------- */
// The hero section was hastily and sloppily done before - I spent some time wireframing some ideas & learning more about the MUI library 
// There was too much element nesting going on before, and an overly complicated approach to structuring such a simplistic part of the page 
// ! Wireframes can be seen at: https://trello.com/c/1ky1rTXR 

// New flow: 
// * 1 parent element - the MUI Box component, a generic and cutomizable div
// * Child elements: 2 Typography components, 1 Button component 
// * State: None 

// Will be rendering in a parent component Landing.js, with another paginated component with more information below