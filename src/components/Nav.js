import React from 'react'; 

import AppBar from '@material-ui/core/AppBar'; 
import IconButton from '@material-ui/core/IconButton'; 
import InputBase from '@material-ui/core/InputBase'; 
import SearchIcon from '@material-ui/icons/Search'; 
import Switch from '@material-ui/core/Switch'; 
import Toolbar from '@material-ui/core/Toolbar'; 

import { withStyles } from '@material-ui/core/styles'; 
import styles from '../styles/NavbarStyles'; 

function Nav(props) {
    const { classes } = props; 

    return(
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="primary">
                        <span>English</span>
                    </IconButton>
                    <IconButton className={classes.title} color="primary">
                        <span>LeitSpeed</span>
                    </IconButton>
                <Switch />
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