import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../assets/SmurfBackground.jpg';

import './Smurf.css';

function Home () {
    return(
        <div>
            <h1>Smurf Database</h1>
            <div className='danger-button'>
             <Link className='enter' to='/smurfs'>Enter Smurf Village</Link>
             <img className='background'src={Background} />
            </div>
        </div>

    )
}
export default Home;