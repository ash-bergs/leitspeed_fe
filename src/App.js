import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
//! 3/23/21 - moved the CssBaseline from the Hero section to here... where it made much more sense as it effect everything from the top down
import { CssBaseline } from '@material-ui/core';

import './App.css'

import Dashboard from './components/dashboard/Dashboard'; 
import Landing from './components/LandingPage/Landing'; 
import Nav from './components/Nav'; 
import LoginView from './components/login/LoginView'; 

function App() {

  return (
    <React.Fragment>
    <Nav />
    <CssBaseline />
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={LoginView} /> 
      <Route path="/dashboard" component={Dashboard} /> 
      {/* Path to / is a welcome header, logo, etc that kind of thing - renders sign up form */}
      {/* Route to dashboard, protected - Renders Cards, Study lists?, Study game */}
      {/* Add/Edit Form - use one form to complete both tasks?? */}
    </Router>
    </React.Fragment>
  );
}

export default App;

