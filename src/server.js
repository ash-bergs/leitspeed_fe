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
      user: Model,
    },

    seeds(server) {
      //* 🌱 seeding the database
      server.create('card', {
        user_id: 1,
        deck_id: 1,
        card_front: 'What does enumerate do?',
        card_back:
          ' Enumerate adds a counter to an iterable, and returns it in the form of an enumerate object. The object can be used directly in for loops, or converted into a list of tuples (using the list() method).',
        card_notes: ['Python method', 'Programming'],
        active: true,
        public: true,
      });
      server.create('card', {
        user_id: 1,
        deck_id: 1,
        card_front: 'What are keyword arguments?',
        card_back:
          'Keyword arguments are named - meaning that their position does not matter but their name does',
        card_notes: ['Programming'],
        active: true,
        public: true,
      });
      server.create('card', {
        user_id: 1,
        deck_id: 1,
        card_front: 'What are positional arguments?',
        card_back:
          'Positional arguments can be named anything (banana words), but their position is important!',
        card_notes: ['Programming'],
        active: true,
        public: true,
      });
      server.create('deck', {
        name: 'Computer Science',
        public: true,
        color: 'pink',
        user: 'snazzyStudy',
      });
      server.create('deck', {
        name: 'Bio 101',
        public: true,
        color: 'pink',
        user: 'snazzyStudy',
      });
      server.create('deck', {
        name: 'Machine Learning',
        public: true,
        color: 'pink',
        user: 'snazzyStudy',
      });
      server.create('user', {
        email: 'snazzyStudy@gmail.com',
        username: 'snazzyStudy',
        password: '1234',
      });
    },

    routes() {
      this.namespace = 'api';

      // CARDS routes
      this.get('/cards', (schema) => {
        return schema.cards.all();
      });

      // POST cards route
      this.post('/cards', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        // use the schema object to create a new card Model instance
        schema.cards.create(attrs);
        return schema.cards.all();
      });

      // DECKS routes
      this.get('/decks', (schema) => {
        return schema.decks.all();
      });

      // USERS routes
      this.get('/users', (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
