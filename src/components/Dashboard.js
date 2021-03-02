import React from 'react'

/* -------------------------------------------------------------------------- */
/*                             About the Dashboard                            */
// * Dashboard is a view component
// ? I think this 👆 is the right way to refer to it? Not sure...
// It will render several child components, it is a TOP LEVEL component...
// Because of that I should make it concerned with state, like cards, and actions on cards. 
/* -------------------------------------------------------------------------- */

function Dashboard() {
    return (
        <div>
            <p>Welcome from the Dashboard</p>
            <p>First TODO: Add the grid structure for the page! and get Material UI in the mix.</p>
        </div>
    )
}

export default Dashboard; 