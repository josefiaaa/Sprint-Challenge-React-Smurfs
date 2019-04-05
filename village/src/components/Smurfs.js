import React from 'react';

import Smurf from './Smurf';



const Smurfs = props => {
  
    return (
      <div className="smurfs">
        <h1>Smurf Village</h1>
        <div className='smurf-wrap'>
          {props.smurfs.map(smurf => {
            return (
              <div className='smurf'>
                <Smurf
                deleteSmurf={props.deleteSmurf}
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

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
