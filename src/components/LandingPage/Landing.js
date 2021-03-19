/* -------------------------------------------------------------------------- */
/*                                about Landing                               */
/*
    Landing is the index of the LandingPage directory, it's used to render all the parts that make up the landing page. 
 */
/* -------------------------------------------------------------------------- */
import React from 'react'; 
import { CssBaseline } from '@material-ui/core';

import Hero from './Hero'; 
//import HeroDetails from './HeroDetails'; 

function Landing() {
    return (
        <React.Fragment>
            <CssBaseline />
                <Hero /> 
                
        </React.Fragment>
    )
}

export default Landing; 