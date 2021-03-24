const styles = theme => ({
    root: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // used the shorthand for padding, TRBL 👇
        // padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme
        //   .spacing(1)}px`
        padding: theme.spacing(2),
    }
}); 

export default styles; 