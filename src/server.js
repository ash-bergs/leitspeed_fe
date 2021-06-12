import { createServer, Model } from 'miragejs';

//! Further reading:
// https://css-tricks.com/dont-wait-mock-the-api/

// 🧞 Mirage DB Setup 🧞

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      card: Model,
      deck: Model,
    },

    seeds(server) {
      //* 🌱 seeding the database
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

    routes() {
      this.namespace = 'api';

      this.get('/cards', (schema) => {
        return schema.cards.all();
      });

      this.get('/decks', (schema) => {
        return schema.decks.all();
      });
    },
  });

  return server;
}
