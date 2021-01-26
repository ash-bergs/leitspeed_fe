const cards = [
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
]; 

export default cards; 