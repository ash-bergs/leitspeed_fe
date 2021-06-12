/* -------------------------------------------------------------------------- */
/*                        About the Slideshow Compoent                        */
/*
    This component displays a slideshow on the homepage! 

    Component structure: 
    Parent - <section> "slideshow" 
        Child - <div> "slideHolder" - holds all the slides
            Children - 3 <section> "slide" "previousSlide" "currentSlide" "nextSlide" - the slides //? Use MUI Box component?
                Children - <div> "slideContent"
        Child - <div> "slideshow-controller" - holds buttons for navigating slides 

    State: 
    This component manages 3 "slices" of state: 
    * thumbnails - an array of images 
    * currentSlide - holds the index of the current slide in the thumbnails array
    * currentSlideStyle - used to set the background image (the slide) of the slideContent div 
*/
//TODO - use MUI icons for the Previous and Next selections? 
//* Need to do more research on MUI icons now that I understand JSS overrides more 
//! 04/13/21: Learning from this tutorial as I go: https://dev.to/raymag/build-a-slideshow-component-with-reactjs-6ec 
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react'; 
import { Box, Button } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 

import styles from './SlideshowStyles'; 

function Slideshow({ classes, images=[], interval=3000 }) {
    const [thumbnails, setThumbnails] = useState([]); 
    const [currentSlide, setCurrentSlide] = useState(0); 
    const [currentSlideStyle, setCurrentSlideStyle] = useState({}); 

    // useEffect updates state as the slides are flipped through. Starts on slide 0. 
    useEffect(() => {
        // set the passed in images parameter (props) to the thumbnails state
        setThumbnails(images); 
        // set the background image of the currentSlide div 
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        const loop = setInterval(() => {
            if (currentSlide === thumbnails.length-1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1); 
            }
        }, interval)

        // return prevents stack overflow by clearing the loop constant of the function 👆
        return () => clearInterval(loop)
    }, [images, currentSlide, interval])

    //* Helper functions 
    function previous() {
        // if the currentSlide is GREATER than zero, we can decrement 
        if(currentSlide>0) {
            setCurrentSlide(currentSlide - 1); 
        } else {
            // else if it's equal to zero (because it couldn't be negative), set it the last image in the array 
            setCurrentSlide(thumbnails.length-1); 
        }
    }

    function next() {
        // if the current slide is the LAST one in the array
        if (currentSlide === thumbnails.length-1) {
            // set the slide to the FIRST image in the array 
            setCurrentSlide(0); 
        } else {
            // otherwise increment it 
            setCurrentSlide(currentSlide + 1); 
        }
    }

    return (
        <Box className={classes.slideshow}>
            
            <div className={classes.slideHolder}>
                <Box className="slide previousSlide">
                    <div className={classes.slideContent}></div>
                </Box>
                <Box className="slide currentSlide">
                    <div style={currentSlideStyle} className={classes.slideContent}></div>
                </Box>
                <Box className="slide nextSlide">
                    <div className={classes.slideContent}></div>
                </Box>
            </div>

            <div className={classes.slideshowController}>
                <Button onClick={previous} >Previous</Button>
                <Button onClick={next} >Next</Button>
            </div>

        </Box>
    )
}

export default withStyles(styles)(Slideshow); 