const styles = theme => ({
    slideshow: {
        // rules here
        width: "80%", 
        margin: "0 auto"
    }, 
    slideHolder: {
        display: "flex", 
        justifyContent: "space-evenly", 
        alignItems: "center", 
        flexDirection: "row", 
        //? "& .classname" should be the JSS child selector (the space after the & is significant!)
        "& .currentSlide": {
            width: "400px", 
            height: "300px", 
            margin: "auto 10px"
        }, 
        "& .previousSlide, .nextSlide": {
            width: "200px", 
            height: "150px", 
        }, 
    },
    slideContent: {
        width: "100%", 
        height: "100%", 
        background: theme.palette.primary.main, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        borderRadius: "5px", 
        boxShadow: "5px 5px 5px lightgrey"
    }, 
    slideshowController: {
        marginTop: "10px", 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}); 

export default styles; 

/* -------------------------------------------------------------------------- */
/*                             About JSS Selectors                            */
// * JSS lets us “use JavaScript to describe styles in a declarative, conflict-free and reusable way”
// * Basically, it's CSS, but described with JS, and with some wonky abilities given to us thanks to the way JS works 

// ! Child Selector: 
/*
    <div classname={classes.parent}>
        <div classname="firstChild"> Some stuff </div>
    </div> 

    👆 In this ex we have one parent div (with a JSS classname in curly braces - //? What does the curly brackets here mean again? They're an example of....___?__)
    To select and style the child div in the JSS it would look like: 

    parent: {
        "& .firstChild": { <--- the & selector and a SPACE FOLLOWING IT, with the targeted classname or element (like "& div") selects the appropriate children 
            RULES HERE 
        }
    }

    ! To select multiple children use a comma between classnames ---> "& .firstChild, .secondChild"
*/
/* -------------------------------------------------------------------------- */