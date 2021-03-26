/* -------------------------- About useToggleState -------------------------- */
//* By convention this custom hook starts with "use" 
//* The hook simply allows a slice of state (boolean) to be toggled 
//* Created to start implementing a modular nature to the project 

import { useState } from 'react'; 

// default value of false given in case one isn't provided 
function useToggle(initialVal = false){
    // with useState, reserve a "piece of state"
    const [state, setState] = useState(initialVal); 
    const toggle = () => {
        // when toggled, set state to whatever it *isn't*
        setState(!state); 
    }; 
    // custom hook returns an array with a value, and a setter function 
    return [state, toggle]; 
}

export default useToggle; 