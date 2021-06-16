const styles = (theme) => ({
  root: {
    maxWidth: '30%',
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  button: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
});

export default styles;

/* -------------------------------------------------------------------------- */
/*                                A note on CSS                               */
//* I conceptualized something that might seem silly and simple, but everything seems that way once I understand it
// MIN WIDTH sets the smallest possible size an element will shrink to!
/* -------------------------------------------------------------------------- */
