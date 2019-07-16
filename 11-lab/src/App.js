import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    count : 0
  };

  handleClickUp = () => {
    this.setState(({ count })  => ({
      count : count +1
    }));
  };

  handleClickDown = () => {
    this.setState(({ count })  => ({
      count : count -1
    }));
  };
  
  render() {
    return (
      <div>
      <button onClick={this.handleClickUp
      } >+</button>
      <button onClick={this.handleClickDown
      } >-</button> 
      <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;