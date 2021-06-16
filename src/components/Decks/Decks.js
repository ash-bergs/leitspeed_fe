import React from 'react';
import { Container } from '@material-ui/core';

import Deck from './Deck';
import Grid from '../../layoutComponents/Grid';
import SubHeader from '../../layoutComponents/SubHeader';

// this component will be passed a piece of state from App, a decks array
// it will visualize the decks here - i will need to make them into Routes that will render the cards in the deck, and more information

const Decks = ({ decks }) => {
  const renderedItems = decks.map((deck) => {
    return <Deck key={deck.id} deck={deck} />;
  });

  return (
    <Container>
      <SubHeader options={{ variant: 'h5', component: 'h3' }}>
        Recent Decks
      </SubHeader>
      <Grid>{renderedItems}</Grid>
    </Container>
  );
};

export default Decks;

//! I think I'll take this time to make myself a responsive Grid display!
