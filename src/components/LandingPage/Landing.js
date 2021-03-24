/* -------------------------------------------------------------------------- */
/*                                about Landing                               */
/*
    Landing is the index of the LandingPage directory, it's used to render all the parts that make up the landing page. 
 */
/* -------------------------------------------------------------------------- */
import React from 'react'; 

import Hero from './Hero'; 
import HeroDetails from './HeroDetails'; 

function Landing() {
    return (
        <React.Fragment>
                <Hero /> 
                <HeroDetails /> 
        </React.Fragment>
    )
}

export default Landing; 

// color: FF4181