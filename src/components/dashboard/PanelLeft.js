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
//* material UI components 
import { Button, Box, Paper, Typography } from '@material-ui/core';
//* material UI hooks
import { withStyles } from '@material-ui/core/styles'; 

import styles from '../../styles/DashboardStyles'; 

function PanelLeft({ classes }) {

    return (
        <Paper className={classes.panelPaper}>
            
            <Box className={classes.panelUpper}>
                <Button className={classes.button} variant="outlined">Add Card</Button>
                <Button className={classes.button} variant="outlined">Add Deck</Button>
            </Box>

            <Box className={classes.panelLower}>
            {/* "contained" Buttons are 'high-emphasis', I want this for the study button, so it will stand out compared to the others */}
                <Button className={classes.studyButton} variant="contained">Study</Button>
                {/* I want to style this box, to appear slightly raised and have a shadow - Move the title outside of the box? */}
                {/*//TODO This whole part of the panel (from Your Decks to the list of decks) can be a component used for both deck displays (all decks, leitner phase decks) */}
                <Typography variant="h4">Your Decks</Typography>
                <Box boxShadow={1} className={classes.deckBox}>
                    <Typography variant="subtitle1"><span role="img" aria-label="bulletpoint-standin">⚫</span>Decks here</Typography>
                    <Typography variant="subtitle1"><span role="img" aria-label="bulletpoint-standin">⚫</span>Design</Typography>
                    <Typography variant="subtitle1"><span role="img" aria-label="bulletpoint-standin">⚫</span>Computer Science</Typography>
                    <Typography variant="subtitle1"><span role="img" aria-label="bulletpoint-standin">⚫</span>History</Typography>
                    {/*//TODO Make a radio button group component using Material UI FormControl components */}
                </Box>
            </Box>

            {/*//TODO Add a "view pubic decks" button, but it's really more like a link. Using appropriate Material UI component */}

        </Paper>
    ); 
}

export default withStyles(styles)(PanelLeft); 