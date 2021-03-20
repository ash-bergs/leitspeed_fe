const styles = theme => ({
    sectionOne: {
        display: "flex",
        backgroundColor: theme.palette.primary.main,
    }, 
    sectionTwo: {
        display: "flex",
        backgroundColor: "#90caf9", 
        borderBottom: `2px solid ${theme.palette.primary.dark}`
    },
    textBox: {
        width: "50%",
        padding: "0 5%",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        color: "white"
    }, 
    subtitle: {
        fontFamily: "'Oswald', sans-serif",
        fontSize: "6.0rem", 
    },
    bodyText: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.3rem", 
        letterSpacing: ".12rem"
    },
    imgBox: {
        height: "80vh",
        width: "50%", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center"
    }, 
    image: {
        borderRadius: ".5rem", 
        height: "80%", 
    }
}); 

export default styles; 