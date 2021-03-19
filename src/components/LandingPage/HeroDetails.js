import React from 'react'; 
import { Typography } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../../styles/HeroDetailsStyles';

function HeroDetails() {

    return (
        <React.Fragment>
            <Typography>Stop cramming for tests - start retaining information for years to come</Typography>
            <Typography>Intense study sessions work, for a short time. But our memory degrades quickly when we don't access that information later. Using the Leitner study method you can utilize what we know about the Forgetting Curve and spaced repitition to remember almost anything forever.</Typography>
        </React.Fragment>
    )
}

export default withStyles(styles)(HeroDetails); 