/* -------------------------------------------------------------------------- */
/*                            About DashboardStyles                           */
// This file holds the JSS style overrides for the Dashboard Component 
// JS is used to describe CSS rules that will be applied to the Dashboard elements through the withStyles hook
//TODO - Separation of concerns: The styling for the UserPanel component are also in this file, because I built them side by side. Now I realize they're two separate entities. Move the styles for UserPanel to the UserPanel directory, filename: UserPanelStyles.js
/* -------------------------------------------------------------------------- */

const styles = theme => ({
    // root describes parent Container (material UI component)
    root: {
        width: "100%", 
        marginTop: theme.spacing(2),
        margin: "0 auto", 
        display: "flex", 
    }, 
    box: {
        //margin: "1%",
        width: "100%",
    }, 
    // panelPaper describes the Paper component that holds the buttons for users to add cards/decks, and enter study mode 
    // later it will holds Card components that render a users decks and leit-decks to update the state in Cards component 
    panelPaper: {
        //margin: "1%", 
        margin: theme.spacing(2),
        width: "25vw",
        display: "flex", 
        flexDirection: "column", 
    }, 
    button: {
        margin: theme.spacing(1),
    },
    panelUpper: {
        // display flex floats the Add Card and Add Deck button next to one another
        display: "flex", 
        // evenly use space around buttons
        justifyContent: "space-around", 
    },
    panelLower: {
        // panelLower controls the panelPaper below the Add Card and Add Deck buttons. Starts with Submit button. 
        // renders children in display: flex, and column direction
        display: "flex", 
        flexDirection: "column",
    }, 
    studyButton: {
        margin: theme.spacing(1),
        color: 'white', 
        backgroundColor: theme.palette.secondary.light, 
    }, 
    deckBox: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    },
}); 

export default styles; 