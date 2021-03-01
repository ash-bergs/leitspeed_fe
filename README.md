# Learn with LeitSpeed! 

The Leitner system was a method of studying developed by German science journalist, Sebastien Leitner in the 1970's. Leitner's approach hinged on using flashcards to study learning material using the principle of spaced repition - another learning principle explored by Leitner's predecessor, Hermann Ebbinghaus. Ebbinghause defined what he called "the forgetting curve" and the "spacing effect." 

Using these principles a student can tackle learning almost anything by spacing their learning, and lessening the forgetting curve. 

With LeitSpeed you can make your own collection of digital flashcards, and study them using the Leitner system of spaced repitition. 

## Project Status: Under Construction 

The project is just getting going. I'm building a backend with Node and Express, which will let user's create a profile, add cards, organize cards by deck, and study them as they wish. 

Optionally, they can make certain decks public and share them with other learners. 

## Project Previews 

🚧 I'll be adding screenshots here soon! 🚧

## Project Dependencies 

The project currently uses this tech stack: 
- react-router-dom - for routing between component views and around the app 
- Material UI - The base of the styling is coming from the Material UI library. 
- JSS - On top of Material UI, JSS styles the Material UI to our own custom settings (colors, etc.)
- react-card-flip - an NPM package to provide the card flipping effect 

User Flow [userflow](https://ibb.co/ySyTrSk)

## Installation & Setup

You will need Node and npm to clone down this project. 

Installation - `npm install` 
Start - `npm run dev` 
To visit - `localhost:3000/` 

## Project Reflection 

- What was the context of this project? 
This project is a personal side project. I love making and studying flashcards using the Leitner approach - and thought it would be so handy to have that in my phone! 

- What did you set out to build? 
I set out to build a studying app, where a user could easily make flashcards, create and share decks with peers, and study material using the principles of spaced repition, and flattening the forgetting curve. 

- Why is this project challenging & a good learning experience? 
The most challenging aspect of this project so far has been the backend API [personal note: link to BE repo] - and tackling how I want to achieve spaced repition. 

Right now my approach utilizes a piece of data, what I'll call the `leitnerNumber` to indicate what phase of spaced repition a card is curerntly in. 

When the user starts `studyMode` they will be taken through the appropriate decks for that day (deck 1 is studied every day, deck 2 is studied every 3 days, and so on). 

Should I: 
- Combine both decks in study mode, so a user will go through both to complete the study session? 
- Go through the decks for that day individually, starting with deck 1? 

How will I: 
- Keep track of what day the user is on, and what decks they should be studying? 
- Would this be tracked in the backend? Or is it better to complete it on the frontend, and if so, how? 

Solutions:  
- Using localStorage might be an answer to tracking user progress, but perhaps not an altogether sound one... 

- What were some unexpected obstacles? 
The project is still getting off the ground, and the problems run into have been mostly mundane. Some fun challenges await me though! 

- What tools are used to implement this project? 
Most notably Material UI was used to build the frontend UI. Material UI is a design language developed by Google in 2014. 

Material UI uses card motifs and grid-based layouts, and builds on them with responsive animations, transitions and other effects to give the page life. JSS is used on top of Material UI to override the styles given there. JSS is a CSS authoring tool that lets us *describe* CSS rules using JS. 

