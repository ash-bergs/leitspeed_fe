import React from 'react';

//* material UI components
import { Container, Box } from '@material-ui/core';

//* material UI hook
import { withStyles } from '@material-ui/core/styles';

//* dev built components
import Cards from '../Cards';
import UserPanel from '../UserPanel/UserPanel';
//import UserPanel from '../UserPanel';
import styles from './DashboardStyles';

// * classes refers to MUI style overrides - style classes
function Dashboard({ cards, decks, classes }) {
  console.log('todo', decks);
  //TODO decks is now being brought into the Dashboard, consume it!

  return (
    <Container className={classes.root} fixed>
      <UserPanel />
      <Box className={classes.box}>
        <Cards cards={cards} />
      </Box>
    </Container>
  );
}

export default withStyles(styles)(Dashboard);
