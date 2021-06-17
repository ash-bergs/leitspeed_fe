import React from 'react';
import { Box, Paper } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import styles from './UserPanelStyles';

const UserPanel = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={3} variant="outlined">
      <p>User Controls:</p>
      <Box>
        <p>Comp Sci</p>
        <p>Chemistry</p>
        <p>Art History</p>
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(UserPanel);
