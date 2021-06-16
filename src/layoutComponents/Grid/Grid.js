import React from 'react';
import styles from './GridStyles';
import { withStyles } from '@material-ui/core/styles';

const Grid = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Grid);
