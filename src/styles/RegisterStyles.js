const styles = theme => ({
    main: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
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
      padding: `${theme.spacing(8)}px ${theme.spacing(8)}px ${theme
        .spacing(3)}px`
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      marginTop: theme.spacing(3)
    }
  });

  
  export default styles;