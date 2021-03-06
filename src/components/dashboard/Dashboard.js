import React from 'react'; 

//* material UI components 
import { Container, Box} from '@material-ui/core';
//* material UI hooks
import { withStyles } from '@material-ui/core/styles'; 

import Cards from '../Cards'; 
import PanelLeft from './PanelLeft'; 
import styles from '../../styles/DashboardStyles'; 
//TODO - A component to render "rewards" - kind of like a shelf. This will go directly under the Nav bar. 
// 👆 These could use the same base component, with different state passed in. 
//TODO - Give the PanelLeft component "sticky" positioning - let the Panel follow the user when they scroll
/* -------------------------------------------------------------------------- */
/*                             About the Dashboard                            */
// * Dashboard is a top-level component
// ? I think this 👆 is the right way to refer to it? Not sure...
// Because of that I should make it concerned with state, like cards, and actions on cards. 

// From Material UI: Container, Paper, Button, Typography 
/* -------------------------------------------------------------------------- */


// * Dummy data to be passed to the DecksView component - state will be held in Dashboard once the API is ready 
const decks = [
    {
        id: 1,
        name: "Computer Science", 
        public: false
    },
    {
        id: 2,
        name: "American History", 
        public: false
    },
    {
        id: 3,
        name: "Food Science", 
        public: true
    },
    {
        id: 4,
        name: "CSS", 
        public: true
    },
    {
        id: 5,
        name: "JavaScript", 
        public: false
    },
]; 

const leitDecks = [
    {
        id: 1, 
        name: "Phase 1"
    },
    {
        id: 2, 
        name: "Phase 2"
    },
    {
        id: 3, 
        name: "Phase 3"
    },
    {
        id: 4, 
        name: "Phase 4"
    },
    {
        id: 5, 
        name: "Phase 5"
    }, 
]; 

function Dashboard({ classes }) {
    // destructure `classes` in the args - connect styles and component by wrapping with withStyles in the export 
    // ? does this object come to use from Material UI?
    return (
        // Container centers content horizontally 
        // bounded by the `maxWidth` property - large, medium, small. etc
        <Container className={classes.root} fixed>
            
            {/* Pass DECKS to PanelLeft, and finally to the DecksView child component */}
            {/* Pass LEIT-DECKS to PanelLeft, and finally to the DecksView child component */}
            <PanelLeft decks={decks} leitDecks={leitDecks} />

            {/* Paper component gives us something that feels like paper, flat, white, etc*/}
            <Box className={classes.box}>
            {/* Will there be a ternary here to update different deck selections? if selectedDeck is null, then render Cards, otherwise render that decks cards.... Cards will probably need to be refactored to render dynamic sets */}
                <Cards /> 
            </Box>

        </Container>
    )
}

export default withStyles(styles)(Dashboard);

//TODO Dashboard: 
// ! There's a problem with the Dashboard: 
// When a card is flipped the parent container shifts and collapses to fit the differently sized text elements? I'm not quite sure why it's doing that. 
// I need to find a way to make sure the Paper component rendering the Cards component won't shift when a card is flipped. 