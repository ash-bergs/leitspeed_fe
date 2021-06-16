import React from 'react';
import styles from './GridStyles';
import { withStyles } from '@material-ui/core/styles';

const Grid = (props) => {
  const { classes } = props;
  return <div className={classes.root}>{props.children}</div>;
};

export default withStyles(styles)(Grid);
