import React from 'react'; 
import { Container, Paper } from '@material-ui/core'; 
import { withStyles } from '@material-ui/core/styles'; 
import styles from './LoginStyles'; 
import LoginForm from './subComponents/LoginForm'; 

function Login({ classes }) {
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <LoginForm />
            </Paper>
        </Container>
    ); 
}

export default withStyles(styles)(Login); 