const styles = (theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '5%',

    '& .grid-item': {
      placeSelf: 'center',
    },
  },
});

export default styles;
