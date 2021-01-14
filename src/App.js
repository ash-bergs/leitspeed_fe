import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css';

import Hero from './components/Hero'; 
import Nav from './components/Nav'; 

function App() {

  return (
    <Router>
      <Nav />
      <Route path="/" component={Hero} />
      {/* Path to / is a welcome header, logo, etc that kind of thing - renders sign up form */}
      {/* Route to dashboard, protected - Renders Cards, Study lists?, Study game */}
      {/* Add/Edit Form - use one form to complete both tasks?? */}
    </Router>
  );
}

export default App;
