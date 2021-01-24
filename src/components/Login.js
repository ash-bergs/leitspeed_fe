import React from 'react'; 

import { Checkbox, FormControl, FormControlLabel, Input, InputLabel } from '@material-ui/core'; 
import Button from '@material-ui/core/Button'; 

import { withStyles } from '@material-ui/core/styles'; 
import styles from '../styles/RegisterStyles'; 


function Login(props) {
    const { classes } = props;

    return(
        <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" name="password"></Input>
            </FormControl>
            {/* The Material UI FormControlLabel is used for checkboxes, something that works a little differently than its cousin text input */}
            <FormControlLabel label="Remember Me"
            control={
                <Checkbox color="primary" />
            } />

            <Button className={classes.submit}
                variant="contained" 
                type="submit" 
                color="primary"
                fullWidth > Submit </Button>
        </form>
    ); 
}

export default withStyles(styles)(Login); 

// I just realized this is a login form, for sure. 🤦‍♀️ that's okay! We'll change some names and update code 
// Register will require more, and make a different api call. 