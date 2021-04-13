import { fade } from '@material-ui/core/styles/colorManipulator'; 
// Fade is a function, where we can pass in: 
// A color 
// Decimal value 
// Then it fades that color by that amount! 

/* -------------------------------------------------------------------------- */
/*                             About NavbarStyles                             */
   /* 
   NavbarStyles is a file of JSS styles to override the default settings given 
   in Material UI. 
   From the docs: JSS is an authoring tool for CSS which allows you to use 
   JavaScript to describe styles in a declarative, conflict-free and reusable way
   */
/* -------------------------------------------------------------------------- */

const styles = theme => ({
    root: {
        width: "100%",
        marginBottom: 0, 
        position: "sticky", 
        top: 0, 
        zIndex: 10
    }, 
    grow: {
        flexGrow: 1
    }, 
    hidden: {
        [theme.breakpoints.down("sm")] : {
                display: "none"
        }
    },
    homeLink: {
        color: "white", 
        textDecoration: "none", 
        fontFamily: "'Oswald', sans-serif", 
        fontSize: "2.0rem",
    },
    // ! sticking point - feeling a little silly 
    // I'm definining two classes depending on light or dark mode 
    // logically, only one or two property has to change between the settings 
    // how can I define these styles in a modular, DRY way?? 
    // ? Needs research 🤓🤓
    // For now defining them like this is just a chance to get reps in 🤷‍♀️
    homeLinkDark: {
        color: "black", 
        textDecoration: "none", 
        fontFamily: "'Oswald', sans-serif", 
        fontSize: "2.0rem",
    }, 
    loginLink: {
        border: "2.0px solid white", 
        paddingBottom: ".10%",
        padding: "0 10%",
        borderRadius: ".2rem",
        color: "white", 
        textDecoration: "none", 
        fontFamily: "'Lato', sans-serif", 
        fontSize: "1.3rem", 
        lineHeight: "1.9rem"
    },
    loginLinkDark: {
        border: "2.0px solid black", 
        paddingBottom: ".10%",
        padding: "0 10%",
        borderRadius: ".2rem",
        color: "black", 
        textDecoration: "none", 
        fontFamily: "'Lato', sans-serif", 
        fontSize: "1.3rem", 
        lineHeight: "1.9rem"
    }, 
    search: {
        position: "relative", 
        // using Material UI styles👇
        borderRadius: theme.shape.borderRadius, 
        backgroundColor: fade(theme.palette.common.white, 0.15), 
        marginLeft: 0,
        width: "100%", 
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1), 
            width: "auto"
        },
        "&:hover": {
            // this is how we select the hover event in JSS ⬆
            backgroundColor: fade(theme.palette.common.white, 0.25)
        }, 
    },
    searchDark: {
        position: "relative", 
        // using Material UI styles👇
        borderRadius: theme.shape.borderRadius, 
        backgroundColor: fade(theme.palette.common.black, 0.15), 
        marginLeft: 0,
        width: "100%", 
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1), 
            width: "auto"
        },
        "&:hover": {
            // this is how we select the hover event in JSS ⬆
            backgroundColor: fade(theme.palette.common.black, 0.25)
        }, 
    }, 
    searchIcon: {
        width: theme.spacing(9), 
        height: "100%", 
        // all of this aligns the icon both vertically and horizontally 👇
        position: "absolute", 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center"
    }, 
    inputRoot: {
        color: "inherit", 
        width: "100%"
    }, 
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create("width"), 
        // making transitions this way is very simple 👆
        // we're basically say theme.transitions make me a transition for "width"
        width: "100%", 
        [theme.breakpoints.up("sm")]: {
            width: 120, 
            "&:focus": {
                width: 200
            }
            // now when the search input is clicked (or is focused) it grows 
        }
    }
}); 

export default styles; 

//? Sticking Point: I was getting a persistent error in my console, related to the Material UI `theme.spacing.unit` being deprecated 
/* 
After some initial googling I found that Material UI v4 addresses this issue - 

* Basic spacing unit
v3 theme.spacing.unit
v4 theme.spacing(1)

* Reducing spacing
v3 theme.spacing.unit / 5
v4 theme.spacing(1/5)

* Extending spacing
v3 theme.spacing.unit * 5
v4 theme.spacing(5)

Warning gone! 😀
*/