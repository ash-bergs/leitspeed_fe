import React from 'react'; 
//import "../App.css";

import Container from './common_components/Container'; 

function Hero(props) {

    return (
        <Container>
            <div className="hero flexBox">
                <div className="flexColumn hero-left">
                    <h1>Learn at Leitspeed</h1>
                    <p>Remember almsost anything, forever!</p>
                </div>
                <div className="flexColumn hero-right">
                    {/* image posted here */}
                </div>
            </div>
        </Container>
    );
}

export default Hero; 


/* 
Design of Hero section: 
a simple div with 2 divs inside - set to flex, default row 
the inner divs will be set to column direction, the div on the left side holds an image
Div on the right holds text, positioned absolutely to float across the hero section
*/

/* 
//*TODO At this point I need to consider how I want to style this - I'm thinking using Bootstrap might be a good idea
But I am going to research up and coming style libraries 
for now I am applying the basic skeleton of what I want the page to look like. Using limited classes and some basic, vanilla CSS 
Flexbox is used to position the elements in Hero. I would want different typefaces, to decrease the distance between the h1 and the p elements, and to crop/use the photo more beautifully 
*/