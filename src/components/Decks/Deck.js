import React from 'react';

// material UI imports
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';

const Deck = () => {
  return (
    <Card>
      <CardContent>
        <Typography>{deck.title}</Typography>
      </CardContent>
      <CardActions>
        <Button>See all cards</Button>
      </CardActions>
    </Card>
  );
};

export default Deck;
