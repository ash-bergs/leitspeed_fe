/* -------------------------------------------------------------------------- */
/*                                About Context                               */
/* 
    Per the React docs: 
    * "Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language."

    The first task Context will be used for is a global light or dark theme 
    A view component (PageContent) will be created to simplify what element needs to change (i.e. the background element)


*/
/* -------------------------------------------------------------------------- */

import React, { createContext } from 'react'; 
import useToggleState from '../hooks/useToggleState'; 

// create the context by invoking createContext hook
// ? This returns....? An object, I assume, but I need to do more research on this 
export const ThemeContext = createContext(); 

export function ThemeProvider(props) {
    // custom hook 
    // isDarkMode is the state, and toggleTheme is the toggle function 
    const [isDarkMode, toggleTheme] = useToggleState(false); 

    // The Context PROVIDER is one half of a Context. The provider will wrap all the children, allowing them access to whatever values and functions the Provider is... providing 
    // Which is provided on the very important VALUE prop 
    // Value can only take in ONE value, but that value can contain multiple properties, that value right now is an object, with a state value and a function inside of it that come from the custom hook in useToggleState.js
    // On the Context Provider, they're now available inside of any child (direct or indirect) of the Theme Provider 
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    ); 
}