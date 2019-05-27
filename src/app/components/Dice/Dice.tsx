import * as React from 'react';
const styles = require('../../Scss/main.css');

export  interface DiceInterface {
  random:number;
}

class Dice extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.throwD6 = this.throwD6.bind(this);
    this.throwD10 = this.throwD10.bind(this);
    this.throwD12 = this.throwD12.bind(this);
    this.throwD20 = this.throwD20.bind(this);

    this.state = {
      randomD6: 0,
      randomD10: 0,
      randomD12: 0,
      randomD20: 0
    };
  }

  throwD6() {
    const randomD6 = Math.floor(Math.random() * 6) + 1;
    this.setState({ randomD6 })
  }
  throwD10() {
    const randomD10 = Math.floor(Math.random() * 10) + 1;
    this.setState({ randomD10 })
  }
  throwD12() {
    const randomD12 = Math.floor(Math.random() * 12) + 1;
    this.setState({ randomD12 })
  }
  throwD20() {
    const randomD20 = Math.floor(Math.random() * 20) + 1;
    this.setState({ randomD20 })
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  render () {
    return (
      <div className={styles.container}>
        <button onClick={this.onNavigateHome} className={styles.button}>Return</button>
        <h1>LETS ROLL!</h1>
        <div className={styles.diceContainer}>
          <div className={styles.dice}>
            <div onClick={this.throwD6.bind(this)}>
              <img  src={require('./DiceD6.png')} className={styles.img}/>
            </div>
              <h2>{this.state.randomD6}</h2>
          </div>
          <div className={styles.dice}>
            <div onClick={this.throwD10.bind(this)}>
              <img  src={require('./DiceD10.png')} className={styles.img}/>
            </div>
            <h2>{this.state.randomD10}</h2>
          </div>
          <div className={styles.dice}>
            <div onClick={this.throwD12.bind(this)}>
              <img  src={require('./DiceD12.png')} className={styles.img}/>
            </div>
              <h2>{this.state.randomD12}</h2>
          </div>
          <div className={styles.dice}>
            <div onClick={this.throwD20.bind(this)}>
              <img  src={require('./DiceD20.png')} className={styles.img}/>
            </div>
            <h2>{this.state.randomD20}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Dice;
