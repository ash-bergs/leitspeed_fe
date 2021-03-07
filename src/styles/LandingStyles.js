const styles = theme => ({
    root: {
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh", 
        backgroundImage: `url(${process.env.PUBLIC_URL +  "/assets/rubixWhite-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat", 
    }, 
    title: {
        fontFamily: "'Oswald', sans-serif", 
        fontSize: "8.0rem",
        letterSpacing: '2.6px', 
    }, 
    subtitle: {
        fontFamily: "'Oswald', sans-serif", 
        fontSize: "3.0rem"
    },
    button: {
        width: "20%", 
        margin: "0 auto", 
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        transition: 'all 1s',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    },
}); 

export default styles; 

//TODO How can I set up a theme with Material ui?? So I can quickly control all the fonts, etc? 