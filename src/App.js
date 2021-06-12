import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { createServer, Model } from 'miragejs';
import axios from 'axios';

// now that the Provider has been built, we need to actually use it, so its values can be correctly read by children components
import { ThemeProvider } from './contexts/ThemeContext';
import PageContent from './components/PageContent';

import Dashboard from './components/Dashboard/index';
import Landing from './components/Hero/index';
import Login from './components/Login';
import Nav from './components/Nav/index';

// 🧞 Mirage DB set up
createServer({
  models: {
    card: Model,
    deck: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/cards', (schema, request) => {
      return schema.cards.all();
    });

    this.get('/decks', (schema, request) => {
      return schema.decks.all();
    });
  },

  seeds(server) {
    //* 🌱 seeding the database
    //? How can I extract this so it's not such an eyesore here? 🤔
    server.create('card', {
      user_id: 1,
      subject_id: 1,
      card_front: 'What does enumerate do?',
      card_back:
        ' Enumerate adds a counter to an iterable, and returns it in the form of an enumerate object. The object can be used directly in for loops, or converted into a list of tuples (using the list() method).',
      card_notes: ['Python method', 'Programming'],
      active: true,
      public: true,
    });
    server.create('card', {
      user_id: 1,
      subject_id: 1,
      card_front: 'What are keyword arguments?',
      card_back:
        'Keyword arguments are named - meaning that their position does not matter but their name does',
      card_notes: ['Programming'],
      active: true,
      public: true,
    });
    server.create('card', {
      user_id: 1,
      subject_id: 1,
      card_front: 'What are positional arguments?',
      card_back:
        'Positional arguments can be named anything (banana words), but their position is important!',
      card_notes: ['Programming'],
      active: true,
      public: true,
    });
    server.create('deck', {
      name: 'Computer Science',
      public: false,
      color: 'pink',
    });
  },
});

function App() {
  const [cards, setCards] = useState([]);

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

  console.log(cards);
  return (
    <ThemeProvider>
      <PageContent>
        <Nav />
        <CssBaseline />
        <Router>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard">
            <Dashboard cards={cards} />
          </Route>
        </Router>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
