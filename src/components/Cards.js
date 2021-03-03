import React, { useState } from 'react'; 

import Paper from '@material-ui/core/Paper'; 

//TODO - this state needs to be lifted 🔽
// eventually it will be coming from my API 
import data from '../resources/CardsData'; 

import FlashCard from './Card'; 

//? What will I need from Material UI? 
// Paper, for the main page 
//? How will the cards be done? 
// I've used a third party library in the past that might be useful here, especially for 'study mode' - not sure how I'll implement a game yet 
//* I'll be adding React-Card-Flip to the project and trying it out... I don't know if it will work with Material UI though 🤔 
// Whatever, we're trying it because it's the next logical step. Don't overthink this too much. Get a decent full stack project up. 

function Cards(){
    const [cards] = useState(data); 

    return(
        <Paper style={{ display: "flex", flexDirection: "column" }}>
        {cards.map((card, index) => (
            <FlashCard card={card} key={index} />
        ))}
        </Paper>
    ); 
}

export default Cards; 

/* -------------------------------------------------------------------------- */
/*                                 About Cards                                */
/* 
    //Cards is a parent component, it will hold state, and actions concerned with it,
    //and pass it to the Card child component 

    * Update: Cards will *not* be concerned with state, it will only be rendered in the Dashboard. 
    The Dashboard will be the "top level" component for Cards data 
    The Cards component is now just concerned with displaying Card children
*/
/* -------------------------------------------------------------------------- */