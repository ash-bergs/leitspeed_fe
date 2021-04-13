import React from 'react'; 
import Card from './subComponents/Card'; 

function Cards({ cards }){

    return(
        <React.Fragment>
            {cards.map((card, index) => (
                <Card card={card} key={index} />
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