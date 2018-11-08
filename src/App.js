import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  increment = () => {
    console.log(this.increment)
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    console.log(this.decrement)
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <span>{this.props.count}</span>
          <button onClick={this.increment}>+ 1</button><br/>
          <button onClick={this.decrement}>- 1</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    count: state.count
  };
}


export default connect( mapStateToProps ) (App);
