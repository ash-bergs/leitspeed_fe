import React from 'react'; 

//* material UI components 
import { Container, Paper} from '@material-ui/core';
//* material UI hooks
import { withStyles } from '@material-ui/core/styles'; 

import Cards from '../Cards'; 
import PanelLeft from './PanelLeft'; 
import styles from '../../styles/DashboardStyles'; 
//TODO - A component to render "rewards" - kind of like a shelf. This will go directly under the Nav bar. 
//TODO - A component that renders user's individual decks 
//TODO - A component that renders user's individual leit-decks 
// 👆 These could use the same base component, with different state passed in. 

/* -------------------------------------------------------------------------- */
/*                             About the Dashboard                            */
// * Dashboard is a top-level component
// ? I think this 👆 is the right way to refer to it? Not sure...
// It will render several child components, it is a TOP LEVEL component...
// Because of that I should make it concerned with state, like cards, and actions on cards. 

// From Material UI: Container, Paper, Button, Typography 
/* -------------------------------------------------------------------------- */

//TODO The side panel should be abstracted into it's own component... I'm just realizing that. 

function Dashboard({ classes }) {
    // destructure `classes` in the args 
    // ? does this object come to use from Material UI?
    return (
        // Container centers content horizontally 
        // bounded by the `maxWidth` property - large, medium, small. etc
        <Container className={classes.root} fixed>
                
            <PanelLeft />

            {/* Paper component gives us something that feels like paper, flat, white, etc*/}
            <Paper className={classes.paper} elevation={2}>
                <Cards /> 
            </Paper>

        </Container>
    )
}

export default withStyles(styles)(Dashboard);

/* --------------------------------- Removed -------------------------------- */
// <Paper className={classes.panelPaper}>
//             <Container className={classes.panelUpper}>
//             <Button className={classes.button} variant="outlined">Add Card</Button>
//             <Button className={classes.button} variant="outlined">Add Deck</Button>
//         </Container>
//         <Container className={classes.panelLower}>
//         {/* "contained" Buttons are 'high-emphasis', I want this for the study button, so it will stand out compared to the others */}
//             <Button className={classes.studyButton} variant="contained">Study</Button>
//             <Container style={{ "border": "1px solid red"}}>
//                 <Typography variant="h4">Your Decks</Typography>
//                 <Typography variant="body1">Decks will be listed here</Typography>
//             </Container>
//         </Container>
//     </Paper>

