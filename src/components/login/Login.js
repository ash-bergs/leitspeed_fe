import React, { useContext } from 'react'; 

import { Checkbox, FormControl, FormControlLabel, Input, InputLabel } from '@material-ui/core'; 
import Button from '@material-ui/core/Button'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../../styles/FormStyles'; 
import { ThemeContext } from '../../contexts/ThemeContext'; 


function Login(props) {
    const { isDarkMode } = useContext(ThemeContext); 
    const { classes } = props; 

    return(
        <React.Fragment>
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
                    color={isDarkMode ? "default" : "primary"}
                    fullWidth > Submit </Button>
            </form>
        </React.Fragment>
    ); 
}

export default withStyles(styles)(Login); 
