import React from 'react';

// material UI imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './DeckStyles';

const Deck = ({ classes, deck }) => {
  const itemClass = `grid-item ${classes.root}`;
  return (
    <Card className={itemClass}>
      <CardContent>
        <Typography className={classes.title}>{deck.name}</Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button}>See all cards</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Deck);
