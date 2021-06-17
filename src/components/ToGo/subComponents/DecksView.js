import React, { useState } from 'react'; 
//* material UI components 
import { Box } from '@material-ui/core';
//* material UI FORM components - for radio group 
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core'; 
//! I want this component to render radio buttons.... I need to do more research to see how those work with Material UI
import { withStyles } from '@material-ui/core/styles'; 

import styles from '../../Dashboard/DashboardStyles'; 

function DecksView({ decks, classes }) {
    //* the props object will pass collection of links will be rendered - decks will most likely be the variable name will also carry the title? FormLabel
    // right now this is just set up so I could view the radio group correctly. Will need to think on how to use this state later. 
    const [value] = useState(); 
    //! this value should be coming from the parent DASHBOARD, so we can update state at the top level

    //TODO changeHandler function to update `value` using setValue

    return(
        <Box boxShadow={1} className={classes.deckBox}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Decks</FormLabel>
                {/* This radiogroup component needs an onChange prop and function */}
                <RadioGroup aria-label="deck" name="userdecks" value={value}>
                    {decks.map((deck, index) => {
                        return <FormControlLabel key={index} value={deck.name} control={<Radio />} label={deck.name} />
                    })}
                </RadioGroup>
            </FormControl>
        </Box>
    ); 
}

export default withStyles(styles)(DecksView); 

/* -------------------------------------------------------------------------- */
/*                          Material UI radio buttons                         */
/*
Radio buttons allow users to select one option from a set of options 
? Default selection should be the most commonly used option - but what if we want none selected? 

* Material UI Docs: RadioGroup: RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.

The Material UI components we'll need are: 
* FormControl 
* FormLabel
* RadioGroup
* FormControlLabel

TODO - How to make this dynamic? MAP over a collection that comes back from the server.. 
*/
/* -------------------------------------------------------------------------- */