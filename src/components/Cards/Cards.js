import React from 'react';
import Card from './subComponents/Card';
import Grid from '../../layoutComponents/Grid';
import { Box } from '@material-ui/core';

function Cards({ cards }) {
  const renderedItems = cards.map((card, index) => {
    return <Card card={card} key={card.id} />;
  });

  return (
    <Box>
      <Grid options={{ columns: '1fr 1fr' }}>{renderedItems}</Grid>
    </Box>
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
