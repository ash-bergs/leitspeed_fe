const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
  },
  title: {
    color: 'white',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '8.0rem',
    letterSpacing: '2.6px',
  },
  subtitle: {
    color: 'white',
    fontFamily: "'Lato', sans-serif",
    fontWeight: '400',
    fontSize: '2.0rem',
    letterSpacing: '.10rem',
  },
  button: {
    width: '20%',
    margin: '0 auto',
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transition: 'all 1s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

export default styles;

//TODO How can I set up a theme with Material ui?? So I can quickly control all the fonts, etc?
