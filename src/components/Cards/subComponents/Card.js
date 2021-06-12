import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//*material UI hook wraps component with styles (CardStyles.js)
import { withStyles } from '@material-ui/core/styles';
import styles from './CardStyles';

import ReactCardFlip from 'react-card-flip';
//* material UI components
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';

const FlashCard = ({ card, classes }) => {
  // isFlipped state controls the react-card-flip component, false on start
  //* isFlipped is connected to the ReactCardFlip component - it handles the transition between the front and back of a card
  const [isFlipped, setIsFlipped] = useState(false);

  // click handler - toggles the isFlipped state, flipping the card to reveal the text on the back
  const flipCard = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  //* each "face" of the card is connected to the flipCard handler fn
  //! It may be best to add a "flip" button, rather than making the whole card clickable? Otherwise features like definitions can't really be used (without flipping the card)
  return (
    <React.Fragment>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card onClick={flipCard} className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar className={classes.small} aria-label="subject">
                CSS
              </Avatar>
            }
            className={classes.header}
            title="Deck Subject Here"
          />
          <CardContent className={classes.content}>
            <Typography className={classes.text} variant="h5">
              {card.card_front}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" color="secondary">
              Delete
            </Button>
            <Button size="small" variant="outlined">
              Edit
            </Button>
          </CardActions>
        </Card>

        <Card onClick={flipCard} className={classes.root}>
          <CardContent className={classes.content}>
            <Typography className={classes.text} variant="body1">
              {card.card_back}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/edit">Edit</Link>
          </CardActions>
        </Card>
      </ReactCardFlip>
    </React.Fragment>
  );
};

export default withStyles(styles)(FlashCard);

/* -------------------------------------------------------------------------- */
/*                             proposed structure                             */
/*
    * 4/10/2021 - I'm still learning. File structure has a huge impact on a project's 
    * future. This structure may change as I learn more and improve my practices.      
    components
        | Card 📁
            | CardStyles.js
            | index.js -> Card component itself 
    
    ? Should the Cards component be in this directory?? Or should it be its own modular directory? 
    ! HARRISON LOOK HERE 👆👆👆 Need input 
    
    * Hypothesis: This directory should be renamed to CARDS, index.js should export the Cards component itself 
    * Card will be a SUBCOMPONENT, and can be implicity re-exported from Cards to be reused elsewhere
    * So it will look like:     
    components
        | Cards 📁
            | subComponents 📁
                | Card.js
                | CardStyles.js
            | index.js 
*/
/* -------------------------------------------------------------------------- */

/* --------------------------- Card Design Update --------------------------- */
//* Now that the build has seen some progress, the shape of how things will fit together is starting to emerge.
//* 3/6/21 - Updating the cards to appear more like a flashcard - adding edit and delete button [for now these are non-functional]
//TODO - add a Collapse MUI element to the back of the card - this will render "notes" from the card (if it has any)
//TODO - media sizing - when on mobile the variant of the Typography component should be smaller. h4 is blocky and ugly on small screens.

//TODO - Answer the following...
//? How to use pagination to show one card at a time
//? How can a user flag a card they want to study more, or move one they no longer want to study?
//? How can I track the time a user spends studying a deck, and studying overall? Start by solving for tracking time overall.

//! We have a problem here - clicking the buttons causes the card to flip - we need a way to separate the functionality - edit and delete must not cause the react-card-flip function to trigger
