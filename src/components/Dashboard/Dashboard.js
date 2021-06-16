import React from 'react';
import { Link } from 'react-router-dom';
//* material UI components
import { Container, Box, Button } from '@material-ui/core';

//* material UI hook
import { withStyles } from '@material-ui/core/styles';

//* dev built components
import Cards from '../Cards';
//import UserPanel from '../UserPanel';
import styles from './DashboardStyles';

// * classes refers to MUI style overrides - style classes
function Dashboard({ cards, classes }) {
  return (
    <React.Fragment>
      <Button variant="outlined">
        <Link to="/add-card">Add a Card</Link>
      </Button>
      <Container className={classes.root} fixed>
        <Box className={classes.box}>
          <Cards cards={cards} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(Dashboard);
