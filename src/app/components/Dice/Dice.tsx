import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
const styles = require('../../Scss/main.css');

export interface DiceInterface extends RouteComponentProps {};

export interface DiceStateInterface {
  [dice:number]: number;
}

const dices:number[] = [6, 10, 12, 20];

class Dice extends React.Component<DiceInterface> {
  constructor(props:any) {
    super(props); 
  }

  public state: DiceStateInterface = {};

  throw(dice:number) {
    const rand = Math.floor(Math.random() * dice) + 1;
    this.setState({ [dice]:rand })
  }

  renderDices() {
    return dices.map((dice, index) => (
      <div className={styles.dice} key={index}>
        <div onClick={() => this.throw(dice)}>
          <img  src={require(`./DiceD${dice}.png`)} className={styles.img}/>
        </div>
        <h2>{this.state[dice] || 0}</h2>
        <h4>{this.state[dice] === 1? "OMG" : null}</h4>
      </div>
    ));
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  render () {
    return (
      <div className={styles.container}>
        <div 
          className={styles.returnButton}
          onClick={this.onNavigateHome}
        >
          <img  src={require(`./../../../imgs/arrow.png`)} className={styles.return}/>
        </div>
        <h1>LETS ROLL!</h1>
        <div className={styles.diceContainer}>
          {this.renderDices()}
        </div>
      </div>
    );
  }
}

export default Dice;
