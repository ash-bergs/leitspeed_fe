import React from 'react'; 
import { Button, Container, Paper } from '@material-ui/core';

import Cards from './Cards'; 
//TODO - A component to render "rewards" - kind of like a shelf. This will go directly under the Nav bar. 
//TODO - A component that renders user's individual decks 
//TODO - A component that renders user's individual leit-decks 
// 👆 These could use the same base component, with different state passed in. 

/* -------------------------------------------------------------------------- */
/*                             About the Dashboard                            */
// * Dashboard is a view component
// ? I think this 👆 is the right way to refer to it? Not sure...
// It will render several child components, it is a TOP LEVEL component...
// Because of that I should make it concerned with state, like cards, and actions on cards. 

// From Material UI: Container, Paper, Button, Typography 
//* Fade from material UI for buttons, other touches 
/* -------------------------------------------------------------------------- */

function Dashboard() {
    return (
        // Container centers content horizontally 
        // bounded by the `maxWidth` property - large, medium, small. etc
        <Container maxWidth="lg">
            <Paper>
                <Button>Add Card</Button>
                <Button>Add Deck</Button>
                <Button>Study</Button>
            </Paper>
            {/* Paper component gives us something that feels like paper, flat, white, etc*/}
            <Paper elevation={2}>
                <Cards /> 
            </Paper>
        </Container>
    )
}

export default Dashboard; 

//TODO JSS - The Container is currently displaying both Paper components stacked on top of each other (column) and i want them to display next to one another (row)
// Must update layout of Container, use flexbox 