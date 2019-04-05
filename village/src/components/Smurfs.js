import React, { Component } from 'react';

import Smurf from './Smurf';

// import Village from '../assets/Village.jpg'

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        {/* <img className='village' src={Village} /> */}
        <div className='smurf-wrap'>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='smurf'>
                <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
