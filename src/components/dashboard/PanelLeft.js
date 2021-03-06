/* -------------------------------------------------------------------------- */
/*                        About the PanelLeft Component                       */
// The PanelLeft component describes the utility panel located at the left-hand side of the user dashboard 
// Originally I was building this into Dashboard.js, but I saw that the code there was getting quite bloated. 
// Plus if I wanted to use this panel elsewhere, I'd have to abstract it

// panelUpper - small BOX component holding the Add Card and Add Deck buttons (flexDirection:row, until small screen, then flexDirection:column)
// panelLower - the bulk of the panel. Renders the Study button, the users decks and leit-decks and finally the "view public decks" link/button

// * Note - I was using the Container component from Material UI to render the buttons and decks. After reviewing the Material UI docs, it seems that the Box component is a better option
/* -------------------------------------------------------------------------- */
import React from 'react'; 
import { Link } from 'react-router-dom'; 
//* material UI components 
import { Button, Box, Paper } from '@material-ui/core';
//* material UI hooks
import { withStyles } from '@material-ui/core/styles'; 

import DecksView from './DecksView'; 
import styles from '../../styles/DashboardStyles'; 
//TODO - Give the PanelLeft component "sticky" positioning - let the Panel follow the user when they scroll

function PanelLeft({ decks, leitDecks, classes }) {
    // ? Should the value for the form selection (state) live here? We only want to respond to one at a time.. can we pass that same value prop to both forms? and when it's updated in EITHER it will update the Cards component?
    return (
        <Paper className={classes.panelPaper}>
            
            <Box className={classes.panelUpper}>
                <Button className={classes.button} variant="outlined">Add Card</Button>
                <Button className={classes.button} variant="outlined">Add Deck</Button>
            </Box>

            <Box className={classes.panelLower}>
            {/* "contained" Buttons are 'high-emphasis', I want this for the study button, so it will stand out compared to the others */}
                <Button className={classes.studyButton} variant="contained">Study</Button>
                <DecksView decks={decks} />
                <DecksView decks={leitDecks} />
            </Box>

            <Button 
                className={classes.button} 
                aria-label="View all public decks"
                component={Link}
                to="/view-all"
                variant="contained"
                color="primary"
            >View Public Decks</Button>

        </Paper>
    ); 
}

export default withStyles(styles)(PanelLeft); 