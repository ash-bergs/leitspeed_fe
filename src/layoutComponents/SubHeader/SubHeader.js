import React from 'react';
import styles from './SubHeaderStyles';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const SubHeader = ({ children, classes }) => {
  return <Typography className={classes.root}>{children}</Typography>;
};

export default withStyles(styles)(SubHeader);
