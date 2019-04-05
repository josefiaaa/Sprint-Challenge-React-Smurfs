import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className='deleteCont'>
        <button className='delete' onClick={event => props.deleteSmurf(event, props.id)}>X</button>
      </div>
      <h2>{props.name}</h2>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;