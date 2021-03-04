import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css'

import Dashboard from './components/dashboard/Dashboard'; 
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 
import Login from './components/Login'; 

function App() {

  return (
    <React.Fragment>
    <Nav />
    <Router>
      <Route exact path="/" component={Hero} />
      <Route path="/login" component={Login} /> 
      <Route path="/dashboard" component={Dashboard} /> 
      {/* Path to / is a welcome header, logo, etc that kind of thing - renders sign up form */}
      {/* Route to dashboard, protected - Renders Cards, Study lists?, Study game */}
      {/* Add/Edit Form - use one form to complete both tasks?? */}
    </Router>
    </React.Fragment>
  );
}

export default App;

