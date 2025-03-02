const styles = (theme) => ({
  // root describes parent Card
  root: {
    margin: theme.spacing(4),
  },
  // styles for the colored header on the Card component
  // I'd like to make this dynamic at some point, with decks getting different colors
  // essentially color coding
  header: {
    display: 'flex',
    color: 'white',
    backgroundColor: theme.palette.info.light,
  },
  // styles for Avatar - round deck identifier
  small: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    fontSize: '1rem',
    backgroundColor: theme.palette.info.dark,
  },
  content: {
    textAlign: 'center',
  },
  // margin around the internal text of the card - the question and answer
  text: {
    margin: theme.spacing(3),
  },
});

export default styles;
