import React from 'react';
import { NavLink } from 'react-router-dom';

import './Smurf.css';

const NavBar = () => {
    return(
        <section className='nav-bar'>
            <div className='navbar'>
                <div className='link-wrap'>
                    <NavLink exact to='/' activeClassName='activeNavButton' >Home</NavLink>
                </div>
                <div className='link-wrap'>
                    <NavLink to='/smurfs' activeClassName='activeNavButton' >Smurfs</NavLink>
                </div>
                <div className='link-wrap'>
                    <NavLink to='/smurf-form' activeClassName='activeNavButton' >Add A Smurf</NavLink>
                </div>
            </div>
        </section>
    )
}

export default NavBar;