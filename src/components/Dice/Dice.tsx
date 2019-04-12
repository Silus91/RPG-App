import React, { Component } from 'react';

export  interface DiceInterface {
  side:number;
}

class Dice extends Component<any, any> {

  public state = {
    side:0,
  };

  rollDice () {
    this.setState({
      side:  this.state.side === Math.floor(Math.random() * 100) + 1,
    });
  }

  render() {
    return (
      <div className="App">
      <h1>co</h1>
      <button onClick={() => this.rollDice}>
        Throw
      </button>
      <div>{this.state.side}</div>
      <br />
      <p>{this.state.side}</p>
      </div>
    );
  }
}

export default Dice;
