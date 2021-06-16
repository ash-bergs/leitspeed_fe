import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// import { createServer, Model } from 'miragejs';
import axios from 'axios';

// now that the Provider has been built, we need to actually use it, so its values can be correctly read by children components
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './components/PageContent';

import AddForm from './components/AddForm';
import Dashboard from './components/Dashboard/index';
import Landing from './components/Hero/index';
import Login from './components/Login';
import Nav from './components/Nav/index';

function App() {
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);

  // 🤙 call Mirage API to set cards
  // runs on first render
  useEffect(() => {
    axios
      .get('/api/cards')
      .then((res) => {
        setCards(res.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get users on render
  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users);

  return (
    <ThemeProvider>
      <PageContent>
        <Nav />
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/add-card">
              <AddForm setCards={setCards} />
            </Route>

            <Route path="/dashboard">
              <Dashboard cards={cards} />
            </Route>
          </Switch>
        </Router>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
