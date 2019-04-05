import React, { Component } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: ''
    }
  }

  componentDidMount() {
    console.log('Inside CDM')
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data })
        console.log(res)
      })
      .catch(err => {
        this.setState({ error: err })
        console.log(err);
      })
  }

  addSmurf = (event, NewSmurf) => {
    event.preventDefault();
    const {name, age, height} = NewSmurf

    axios.post('http://localhost:3333/smurfs', {name, age, height})
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/smurf-form' render={() => <SmurfForm addSmurf={this.addSmurf} /> }/>
        <Route path='/smurfs' render={() => <Smurfs smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
