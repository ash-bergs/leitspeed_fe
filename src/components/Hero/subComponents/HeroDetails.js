import React from 'react'; 
import { Box, Paper, Typography } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from './HeroDetailsStyles';

import curveGraphic from './forgetting-curve-graphic.jpg';
import spacedRepGraphic from './spaced-rep-graphic.jpg'

function HeroDetails({ classes }) {

    return (
        <React.Fragment>
            <Paper className={classes.sectionOne}>
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
            <Paper className={classes.sectionTwo}>
                <Box className={classes.imgBox}>
                    <img src={spacedRepGraphic} alt="Spaced repitition visual" className={classes.image} /> 
                </Box>
                <Box className={classes.textBox}>
                    <Typography className={classes.subtitle}>Start Learning.</Typography>
                    <Typography className={classes.bodyText}>
                        
                        Using spaced repitition, studied and written about by Sebastien Leitner in the 1970's, we can flatten the Forgetting Curve, truly learning the material at hand.
                    
                    </Typography>
                </Box>
                
            </Paper>
        </React.Fragment>
    )
}

export default withStyles(styles)(HeroDetails); 

// the box will be a flex container, with 2 elements 