# Learn with LeitSpeed! 

The Leitner system is a method of studying developed by the German science journalist, Sebastien Leitner, in the 1970's. His approach hinged on studying flashcards using the principle of spaced repition - a topic explored by Leitner's predecessor, Hermann Ebbinghaus. Ebbinghause defined what he called "the forgetting curve" and the "spacing effect." 

With LeitSpeed you can make your own collection of digital flashcards, study them using the Leitner system of spaced repitition, and remember (almost) anything - forever! 

## Project Status: Under Construction 

🚧 Under Construction 🚧 

---- 

## Project Previews 

Trello Board: [Link to trello board](https://trello.com/b/bHMZYP3n/leitspeed)


#### Landing Page

**Current Iteration:**

![landing](https://trello-attachments.s3.amazonaws.com/604482f2f5a7783664563a19/60448a62a05c3a32f4bb7b80/f21d41d3d5351258f339d5a63ec29229/current-landing.jpg)

**Wireframes:** 

- See trello card: [Landing Page Card](https://trello.com/c/2X2MLhc1)


#### User Dashboard

**Current Iteration:** 

![Dashboard-current](https://i.ibb.co/2kY9jwG/leitspeed.jpg)

*Status: Developing* 

**Wireframes:** 

- See trello card: [User Story: Dashboard](https://trello.com/c/1ky1rTXR)

*Status: Developing* 

*Components: Dashboard (top-level), -> Cards ( -> Card), PanelLeft ( -> DecksView), Utility Buttons - Add Card, Add Deck, Study Mode, View All Decks*

A Dashboard component has been designed that displays two views. The left-hand view renders a user utility panel (PanelLeft), and the right-hand view renders the user's cards (Cards). 

Dashboard is a top-level component, i.e. it's where state will be located. At the moment the API is not ready for use, so dummy data was created to stand-in for the real-world data. It is being passed from Dashboard to components it's concerned with. 

The PanelLeft component effectively serves as a user "tool bar." From this component they can add a card, add a deck, enter study mode [non-functional], select one of their own decks to view [non-functional], and finally, navigate to all public decks [non-functional]. 

----

## Project Dependencies 

The project currently uses this tech stack: 

- react-router-dom - for routing between component views and around the app 
- Material UI - The base of the styling is coming from the Material UI library. 
- JSS - On top of Material UI, JSS styles the Material UI to our own custom settings (colors, etc.)
- react-card-flip - an NPM package to provide the card flipping effect 
- MirageJS - Mirage fakes a RESTful API for the sake of frontend development and testing 

## Installation & Setup

You will need Node and npm to clone down this project. 

Installation - `npm install` 

Start - `npm run dev` 

To visit - `localhost:3000/` 


## Project Reflection 

1. What is the context of this project? 
This project is a personal side project. I love making and studying flashcards using the Leitner approach - and thought it would be handy to have that on my phone! 

2. What did you set out to build? 
The project was started with the goal of building a way for learners to quickly make, organize, and study flashcards, with or without spaced repition. The idea is that a card consists of a front and back - front being the question and back being the answer. Optionally a user can add a subject (or topic) to organize the card into decks that can be studied together. Notes (an array) can also hold optional notes on the card that might not have a place in the question or the answer. Extra notes and reminders, etc. Users will also be able to share their cards, making a deck public will expose all the cards within. From there, others can fork the deck, or add cards from it to their own collections. 

3. What tools are used to implement this project? 
This project is built with React, using Material UI to design and build the UI. Libraries like react-rewards, react-card-flip are being used to enhance micro-interactions, like flipping a card. 

