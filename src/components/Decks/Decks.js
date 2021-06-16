import React from 'react';
import { Container } from '@material-ui/core';

import Deck from './Deck';

// this component will be passed a piece of state from App, a decks array
// it will visualize the decks here - i will need to make them into Routes that will render the cards in the deck, and more information

const Decks = ({ decks }) => {
  const renderedItems = decks.map((deck) => {
    return <Deck deck={deck} />;
  });

  return <Container>{renderedItems}</Container>;
};

export default Decks;
