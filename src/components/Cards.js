import React from 'react'; 
import FlashCard from './Card'; 

function Cards({ cards }){

    return(
        <React.Fragment>
            {cards.map((card, index) => (
                <FlashCard card={card} key={index} />
            ))}
        </React.Fragment>
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