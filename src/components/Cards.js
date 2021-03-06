import React, { useState } from 'react'; 

import Paper from '@material-ui/core/Paper'; 
//* consider making this just a react Frgament, rather than another div in the code 
import FlashCard from './Card'; 

//TODO - this cards state needs to be lifted to Dashboard
import data from '../resources/CardsData'; 

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
    Parent: Dashboard
    Direct Children: FlashCards
    
    Cards is a view Component that passes state to the child FlashCard component
*/
/* -------------------------------------------------------------------------- */