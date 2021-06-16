import React from 'react';

// hero section background image
//TODO optimize these images - what's the best route to take? Research 🤓🤓
//import background from './blackboardBgOptimized.jpg'

//* material ui components
import { Box, Typography } from '@material-ui/core';
// * material ui hooks
import { withStyles } from '@material-ui/core/styles';
import styles from './HeroStyles';

function Hero(props) {
  const { classes } = props;
  const { decks } = props;
  // used the result of a string interpolation expression to set the background... using the public folder took too long
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>LeitStudy</Typography>
      <Typography className={classes.subtitle}>
        Stop cramming. Start learning.
      </Typography>
    </Box>
  );
}

export default withStyles(styles)(Hero);
