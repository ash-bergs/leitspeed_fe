import React, { useContext } from 'react';
//* material UI imports
import {
  AppBar,
  IconButton,
  InputBase,
  Switch,
  Toolbar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './NavStyles';
//* context imports
// ThemeContext is not a direct export, remember the curly braces!
import { ThemeContext } from '../../contexts/ThemeContext';

function Nav(props) {
  // bringing in the two values from the custom hook, provided by the ThemeContext, consuming them in the nav with useContext hook
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.hidden}>
            <a
              href="/"
              className={isDarkMode ? classes.homeLinkDark : classes.homeLink}
            >
              LeitStudy
            </a>
          </IconButton>

          <IconButton>
            <a
              href="/dashboard"
              className={isDarkMode ? classes.loginLinkDark : classes.loginLink}
            >
              Home
            </a>
          </IconButton>

          <IconButton>
            <a
              href="/login"
              className={isDarkMode ? classes.loginLinkDark : classes.loginLink}
            >
              Login
            </a>
          </IconButton>

          <Switch onChange={toggleTheme} />
          {/* searchbar is all 3 following divs */}
          <div className={classes.grow} />
          <div className={isDarkMode ? classes.searchDark : classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Nav);
