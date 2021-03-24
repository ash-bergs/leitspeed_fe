import React from 'react'; 
import { Container, Paper } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from '../../styles/LoginViewStyles'; 
import Login from './Login'; 

function LoginView({ classes }) {
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Login />
            </Paper>
        </Container>
    ); 
}

export default withStyles(styles)(LoginView); 