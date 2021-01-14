import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Logo(prop) {

    return (
        <Link to="/" className="logo">
            Leitspeed<span>.</span>
        </Link>
    ); 
}

export default Logo; 