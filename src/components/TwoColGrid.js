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

// This component started as something else, when I realized I was making something that I might be able to use later 
// But it wasn't right in the moment 
// I've renamed it this weird name, waiting for the moment when I realize its purpose in the project 