import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ReturnToMain from 'app/resources/functions';

const styles = require('../../Scss/main.css');

export interface DiceInterface extends RouteComponentProps {
  ReturnToMain: () => void;
};

export interface StateInterface {
  dice: number;
  enemy: number;
}

class Challange extends React.Component<DiceInterface> {
  constructor(props:any) {
    super(props); 
  }
  

  public state: StateInterface = {
      dice: 0,
     enemy: 0
    };

  throw() {
    this.setState({ dice: 0, enemy: 0});
    const rand = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => this.setState({ dice:rand }) , 500);
    setTimeout(() => {this.throwEnemy()}, 2000);
  }

  throwEnemy() {
    const rand = Math.floor(Math.random() * 6) + 1;
    this.setState({ enemy:rand })
  }

  renderComparer(){
    const { dice,enemy } = this.state;
    if ((dice === enemy)&& (dice > 0) && (enemy > 0)){
      return <h1>Draw!</h1>
    }
    if (dice > enemy) {
      return <h1>You Won!</h1>
    } else {
      return <h1>You Lost!</h1>
    }
  }

  renderDices() {
      const {dice,enemy } = this.state;
    return(
      <div className={styles.dice}>
        <div onClick={() => this.throw()}>
          <img  src={require(`./../Dice/DiceD6.png`)} className={styles.img}/>
        </div>
        <h2>{dice || 0}</h2>
        <h2>{enemy || 0}</h2>
      </div>
    );
  }

  render () {
    return (
      <div className={styles.container}>
        <h1>LETS ROLL!</h1>
        <ReturnToMain />
        <div className={styles.diceContainer}>
          {this.renderDices()}
        </div>
        <div>
        <div>{this.renderComparer()}</div>
        </div>
      </div>
    );
  }
}

export default Challange;
