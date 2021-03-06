import React, { useState } from 'react'; 
//*material UI hook wraps component with styles (CardStyles.js)
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../styles/CardStyles'; 

import ReactCardFlip from 'react-card-flip'; 
//* material UI components 
import { 
    Avatar, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Typography 
} from '@material-ui/core'; 


const FlashCard = ({ card, classes }) => {
    // isFlipped state controls the react-card-flip component, false on start 
    const [isFlipped, setIsFlipped] = useState(false); 

    // click handler - toggles the isFlipped state, flipping the card to reveal the text on the back
    const flipCard = (event) => {
        event.preventDefault(); 
        setIsFlipped(!isFlipped); 
    }
    //* isFlipped is connected to the ReactCardFlip component - the parents of two separate containing divs - the front and the back.
    //* front and back of each each is its own Card component - the sides have slightly different functionality
    //* each "face" of the card is connected to the flipCard handler fn
    return (
        <React.Fragment>
        
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <Card onClick={flipCard} className={classes.root} variant="outlined">
                    <CardHeader
                        avatar={<Avatar className={classes.small} aria-label="subject">CSS</Avatar>}
                        className={classes.header}
                        title="Deck Subject Here"
                    />
                    <CardContent className={classes.content}>
                        <Typography className={classes.text} variant="h4">{card.card_front}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" color="secondary">Delete</Button>
                        <Button size="small" variant="outlined">Edit</Button>
                    </CardActions>
                </Card>

                <Card onClick={flipCard} className={classes.root}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.text} variant="h4">{card.card_back}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined">Edit</Button>
                    </CardActions>
                </Card>
            </ReactCardFlip>

        </React.Fragment>
    ); 
}

export default withStyles(styles)(FlashCard); 

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