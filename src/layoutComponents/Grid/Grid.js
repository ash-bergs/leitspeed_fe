import React from 'react';
import styles from './GridStyles';
import { withStyles } from '@material-ui/core/styles';

const Grid = ({ children, classes, options }) => {
  return (
    <div
      className={classes.root}
      style={{ gridTemplateColumns: `${options.columns}` }}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(Grid);

// I want this Grid component to be customizable... meaning that it can be fed how many columns it should have on render
// I think this will be done with classnames on an options object
