import React from 'react'; 
import { AppBar, IconButton, InputBase, Switch, Toolbar } from '@material-ui/core';  
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../styles/NavbarStyles'; 

function Nav({ classes }) {

    return(
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <IconButton className={classes.hidden}>
                    <a href="/" className={classes.homeLink}>Leitspeed</a>
                </IconButton>
                <IconButton color="secondary" >
                    <a href="/login" className={classes.loginLink}>login</a>
                </IconButton>
                <Switch />
                {/* searchbar is all 3 following divs */}
                <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{
                            root: classes.inputRoot, 
                            input: classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    ); 
}

export default withStyles(styles)(Nav); 