import React, { useContext } from 'react'; 
import { ThemeContext } from '../contexts/ThemeContext'; 

export default function PageContent(props) {
    // need to consume one piece of data from the Context value prop here: isDarkMode
    const { isDarkMode } = useContext(ThemeContext); 

    const styles = {
        backgroundColor: isDarkMode? "black" : "white", 
        height: "100%", 
        width: "100%",
    }
    return <div style={styles}>{props.children}</div>
}