const styles = theme => ({
    sectionOne: {
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            flexDirection: "column"
        }
    }, 
    sectionTwo: {
        display: "flex",
        backgroundColor: "#90caf9", 
        borderBottom: `2px solid ${theme.palette.primary.dark}`,
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            flexDirection: "column"
        }
    },
    textBox: {
        width: "50%",
        padding: "0 5%",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        color: "white",
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            width: "100%", 
            order: 1, 
            textAlign: "center"
        }
    }, 
    subtitle: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: "4.0rem", 
        letterSpacing: "-.02rem",
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            fontSize: "3.0rem", 
        }
    },
    bodyText: {
        fontFamily: "'Lato', sans-serif",
        fontSize: "1.3rem", 
        letterSpacing: ".10rem", 
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            fontSize: "1.1rem", 
        }
    },
    imgBox: {
        height: "80vh",
        width: "50%", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        [theme.breakpoints.down("sm")] : {
            // using the theme 
            // the styles written here will apply to the small breakpoint and UP
            width: "100%", 
            margin: "0 auto",
            order: 2
        }
    }, 
    image: { 
        width: "80%",
    }
}); 

export default styles; 