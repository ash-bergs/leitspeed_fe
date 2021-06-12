import React from 'react';
import Card from './subComponents/Card';

function Cards({ cards }) {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
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
