import React, { useEffect, useState } from 'react'; 
import { createServer } from 'miragejs'; 

//* material UI components 
import { Container, Box} from '@material-ui/core';
//* material UI hooks
import { withStyles } from '@material-ui/core/styles'; 

//* dev built components 
import Cards from '../Cards'; 
import PanelLeft from './PanelLeft'; 
import styles from '../../styles/DashboardStyles'; 

/* -------------------------------------------------------------------------- */
/*                             About the Dashboard                            */
// * Dashboard is a top-level component
// It's concerned with state, like cards, and actions on cards, decks, etc.

// From Material UI: Container, Box 
/* -------------------------------------------------------------------------- */

//* ---------------------------- 📝 About MirageJS --------------------------- */
// MirageJS is a library to mock an API in a front end build. I'm using it here so I can start putting things together in this app while I build the API. And because I think it would be a good bit of knowledge to have in my back pocket. 
// Installed as a DEVDEPENENCY 
// The Mirage server is set up in this file, the Dashboard, because this will be the component making these calls anyway
// I might abstract it to its own directly in the future. 

//* Begin Mirage mock API 
let server = createServer(); 
//* GET route - /cards - all cards 
server.get("/api/cards", { data: [
    {
        id: 1, 
        user_id: 1, 
        subject_id: 1, 
        card_front: "What does enumerate do?", 
        card_back: " Enumerate adds a counter to an iterable, and returns it in the form of an enumerate object. The object can be used directly in for loops, or converted into a list of tuples (using the list() method).", 
        card_notes: ["Python method", "Programming"], 
        active: true, 
        public: true
    }, 
    {
        id: 2, 
        user_id: 1, 
        subject_id: 1, 
        card_front: "What are keyword arguments?", 
        card_back: "Keyword arguments are named - meaning that their position does not matter but their name does", 
        card_notes: ["Programming"], 
        active: true, 
        public: true
    }, 
    {
        id: 3, 
        user_id: 1, 
        subject_id: 1, 
        card_front: "What are positional arguments?", 
        card_back: "Positional arguments can be named anything (banana words), but their position is important!", 
        card_notes: ["Programming"], 
        active: true, 
        public: true
    }, 
    {
        id: 4, 
        user_id: 1, 
        subject_id: 2, 
        card_front: "Name a feature that makes objects such a widely used data structure", 
        card_back: "Flexible storage. Intuitive storage (key-value pairs). Fast lookup time!", 
        card_notes: ["Programming", "Think about Big O for this answer"], 
        active: true, 
        public: true
    }, 
    {
        id: 5, 
        user_id: 2, 
        subject_id: 3, 
        card_front: "What makes purple cauliflower purple?", 
        card_back: "A surplus of anthocyanin! This antioxidant also gives red wine and grapes their coloring", 
        card_notes: ["Antioxidants", "Purple foods!"], 
        active: true, 
        public: true
    }
]}); 
server.get("/api/decks", { data: [
    {
        id: 1,
        name: "Computer Science", 
        public: false
    },
    {
        id: 2,
        name: "American History", 
        public: false
    },
    {
        id: 3,
        name: "Food Science", 
        public: true
    },
    {
        id: 4,
        name: "CSS", 
        public: true
    },
    {
        id: 5,
        name: "JavaScript", 
        public: false
    },
]}); 

// * Dummy data to be passed to the DecksView component - state will be held in Dashboard once the API is ready 
//TODO Replace all this below with the Mirage server! 
const decks = [
    {
        id: 1,
        name: "Computer Science", 
        public: false
    },
    {
        id: 2,
        name: "American History", 
        public: false
    },
    {
        id: 3,
        name: "Food Science", 
        public: true
    },
    {
        id: 4,
        name: "CSS", 
        public: true
    },
    {
        id: 5,
        name: "JavaScript", 
        public: false
    },
]; 

const leitDecks = [
    {
        id: 1, 
        name: "Phase 1"
    },
    {
        id: 2, 
        name: "Phase 2"
    },
    {
        id: 3, 
        name: "Phase 3"
    },
    {
        id: 4, 
        name: "Phase 4"
    },
    {
        id: 5, 
        name: "Phase 5"
    }, 
]; 

function Dashboard({ classes }) {
    // useState to create a slice of state for CARDS 
    // useEffect will make a fetch call - the Mirage server will intercept the call, and return the cards object defined in the route handler
    // as normal, cards is init as an empty array 
    let [cards, setCards] = useState([]); 
    
    //! 👁 See Note below 
    useEffect(() => {
        fetch("/api/cards")
            .then((res) => res.json())
            .then((json) => {
                setCards(json.data)
            })
    }, []); 
    
    return (
        // Container centers content horizontally 
        // bounded by the `maxWidth` property - large, medium, small. etc
        <Container className={classes.root} fixed>
            
            {/* Pass DECKS to PanelLeft, and finally to the DecksView child component */}
            {/* Pass LEIT-DECKS to PanelLeft, and finally to the DecksView child component */}
            <PanelLeft decks={decks} leitDecks={leitDecks} />

            {/* Paper component gives us something that feels like paper, flat, white, etc*/}
            <Box className={classes.box}>
            {/* Will there be a ternary here to update different deck selections? if selectedDeck is null, then render Cards, otherwise render that decks cards.... Cards will probably need to be refactored to render dynamic sets */}
                <Cards cards={cards} /> 
            </Box>

        </Container>
    )
}

export default withStyles(styles)(Dashboard);

//! 📝 Note 
// branch: testing/mirage-setup
// I'm currently trying to implement the MirageJS Server to mock an API in the front end 
// The motivation for this move is to continue forward momentum on building the UI while the API is being finished. 
// Currently, the architecture of the database is unclear, and being able to play with solution via Mirage will help me get a better idea of how to structure the API 
// The API is also currently non-functional //TODO - get some help on this, perhaps ask Harrison to take a look 

// ? Problem One: Making multiple fetch calls, and updating multiple slices of state simultaneously. 
// I connected the CARDS state to the Mirage server, useEffect is currently updating the cards state on component mount 
// But I also need to make a call for DECKS and LEITDECKS at the same time, ideally updating them together. 

/*
First I explored using PROMISE.ALL in the useEffect.
I thought I could define an array of urls, the endpoints. Something like: 

useEffect(() => {
    const urls = ["/api/cards", "/api/decks", "/api/leitDecks"]; 
    Promise.all(urls.map(url => fetch(url)))
        .then(responses => Promise.all(responses.map(res => res.data))
            .then(data => {
                ! but here I lost the trail I was on... and I'm fairly certain I'm thinking of this chain of Promise objects incorrectly. 
                ! I would need to loop through all the setter functions, and make sure they get the RIGHT data object....
                ? this seems like a very verbose way of doing something that could be more easily accomplished by a React hook - maybe the useReducer hook?
            }))
        })
    }, []); 
*/