import React from 'react'; 
import { Box, Paper, Typography } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../../styles/HeroDetailsStyles';

import curveGraphic from '../../resources/images/forgetting-curve-graphic.jpg';

function HeroDetails({ classes }) {

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <Box className={classes.textBox}>
                    <Typography className={classes.subtitle}>Stop cramming.</Typography>
                    <Typography className={classes.bodyText}>
                        
                        We know that intense study sessions work... for a time. But memory degrades quickly when we don't make an effort to recall it again. The Forgetting Curve illustrates why cramming works for the test - but consistent study works to remember almost anything forever.
                    
                    </Typography>
                </Box>
                <Box className={classes.imgBox}>
                    <img src={curveGraphic} alt="Forgetting Curve Graph" className={classes.image} /> 
                </Box>
            </Paper>
        </React.Fragment>
    )
}

export default withStyles(styles)(HeroDetails); 

// the box will be a flex container, with 2 elements 