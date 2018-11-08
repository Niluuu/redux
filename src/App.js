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
    const {
      someReducer: {
        count,
      },
    } = this.props;

    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <span>{count}</span>
          <button onClick={this.increment}>+ 1</button><br/>
          <button onClick={this.decrement}>- 1</button>
      </div>
    );
  }
}

function mapStateToProps({someReducer}){
  return {
    someReducer,
  };
}


export default connect( mapStateToProps ) (App);
