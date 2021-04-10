/* -------------------------------------------------------------------------- */
/*                                about Landing                               */
/*
    Landing is the index of the LandingPage directory, it's used to render all the parts that make up the landing page. 
 */
/* -------------------------------------------------------------------------- */
import React from 'react'; 

import Hero from './subComponents/Hero'; 
import HeroDetails from './subComponents/HeroDetails'; 

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

//! restructure notes: This should be the main index.js of the HERO component directory 

/* -------------------------------------------------------------------------- */
/*                             proposed structure                             */
/*
    * 4/10/2021 - I'm still learning. File structure has a huge impact on a project's 
    * future. This structure may change as I learn more and improve my practices. 
    *     
    components
        | Hero 📁
            | subComponents 📁
                | Hero.js 
                | HeroDetails.js 
                | HeroDetailsSyles.js
            | index.js 
            | HeroStyles.js (*rename file from LandingStyles.js)
            | blackboardBg.svg (?) //TODO optimize these images 
*/
/* -------------------------------------------------------------------------- */