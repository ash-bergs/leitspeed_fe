import React from 'react';
// hero section background image 
import background from '.././../resources/images/blackboardBgOptimized.jpg'; 
//* material ui components 
import { Box, Typography } from '@material-ui/core';
// * material ui hooks
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../../styles/LandingStyles'; 

function Hero({ classes }) {

    // used the result of a string interpolation expression to set the background... using the public folder took too long
    return(
        <Box className={classes.root} style={{ backgroundImage: `url(${background})`}}>        
            <Typography className={classes.title}>LeitStudy</Typography>
            <Typography className={classes.subtitle}>Stop cramming. Start learning.</Typography>
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
//! 3.26 - I removed the register button from this little hero section. I don't know where to put it right this minute, and I still need to build a proper register form. 😅
// * State: None 