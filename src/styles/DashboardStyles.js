/* -------------------------------------------------------------------------- */
/*                            About DashboardStyles                           */
// This file holds the JSS style overrides for the Dashboard Component 
// JS is used to describe CSS rules that will be applied to the Dashboard elements through the withStyles hook
/* -------------------------------------------------------------------------- */

const styles = theme => ({
    // root describes parent Container (material UI component)
    root: {
        width: "100%", 
        margin: "0 auto", 
        padding: "1%", 
        display: "flex"
    }, 
    paper: {
        margin: "1%",
    }, 
    panelPaper: {
        margin: "1%", 
        display: "flex", 
        flexDirection: "column"
    }
}); 

export default styles; 