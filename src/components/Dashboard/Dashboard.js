import React from 'react';
//* material UI components
import { Container, Box } from '@material-ui/core';

//* material UI hook
import { withStyles } from '@material-ui/core/styles';

//* dev built components
import Cards from '../Cards';
//import UserPanel from '../UserPanel';
import styles from './DashboardStyles';

// * classes refers to MUI style overrides - style classes
function Dashboard({ cards, classes }) {
  return (
    <Container className={classes.root} fixed>
      <Box className={classes.box}>
        <Cards cards={cards} />
      </Box>
    </Container>
  );
}

export default withStyles(styles)(Dashboard);
