import React from 'react'; 

import Container from './common_components/Container'; 
import Logo from './common_components/Logo'; 

function Nav(props) {

    return(
        <nav>
            <Container>
                <Logo /> 
            </Container>
        </nav>
    ); 
}

export default Nav; 