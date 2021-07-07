import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.props.addSmurf(event, this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name . . ."
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age . . ."
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height . . ."
            value={this.state.height}
            name="height"
          />
          <button className='buttons' type="submit">Add To The Village</button>
          <Link className='buttons' to='/smurfs' >Back To Village </Link >
        </form>
      </div>
    );
  }
}

export default SmurfForm;
