import React from 'react'; 

// Dev built components 
//import Container from './common_components/Container'; 

// Material UI components 
import { makeStyles } from '@material-ui/core/styles'; 
// 👆 this is similar to withStyles, but it will be done right here in the component 
// just testing it for the sake of learning 
// it would be a better idea to keep the code modular 

import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%', 
        margin: '0px'
    }, 
    paper: {
        height: '50vh',
        padding: theme.spacing(2), 
        textAlign: 'center', 
        color: theme.palette.text.secondary, 
        background: theme.palette.tonalOffset
    }
})); 

function TwoColGrid(props) {
    const classes = useStyles(); 

    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item lg={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h2">Learn at LeitSpeed</Typography>
                    <Typography variant="h5">Remember (almost) anything, forever!</Typography>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Paper className={classes.paper}>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default TwoColGrid; 


/* 
Design of Hero section: 
a simple div with 2 divs inside - set to flex, default row 
the inner divs will be set to column direction, the div on the left side holds an image
Div on the right holds text, positioned absolutely to float across the hero section
*/

/* 
//*TODO At this point I need to consider how I want to style this - I'm thinking using Bootstrap might be a good idea
//* Decided to use Material UI! Learning to override main styles by passing classNames 
//* For now I'll bring it in and redo the navbar today - Sunday 1/23 
But I am going to research up and coming style libraries 
for now I am applying the basic skeleton of what I want the page to look like. Using limited classes and some basic, vanilla CSS 
Flexbox is used to position the elements in Hero. I would want different typefaces, to decrease the distance between the h1 and the p elements, and to crop/use the photo more beautifully 
*/