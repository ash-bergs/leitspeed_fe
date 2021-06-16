import React from 'react';
import styles from './SubHeaderStyles';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const SubHeader = ({ children, classes, options }) => {
  return (
    <Typography
      variant={options.variant}
      component={options.component}
      className={classes.root}
    >
      {children}
    </Typography>
  );
};

export default withStyles(styles)(SubHeader);

// this component needs to take in a few options so that we can fully take advantage of mui's typography and header hierarchy (accessibility!)
// receive an options object?
