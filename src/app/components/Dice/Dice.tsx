import * as React from 'react';
const styles = require('./Dice.css');

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
  throwD20() {
    const randomD20 = Math.floor(Math.random() * 20) + 1;
    this.setState({ randomD20 })
  }
  throwD12() {
    const randomD12 = Math.floor(Math.random() * 12) + 1;
    this.setState({ randomD12 })
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.dicer}>
        <h2>Lets Play!</h2>
          <div className={styles.dice}>
            <img  src={require('./DiceD6.png')} style={{width: '70px', height: '70px'}}/>
            <p>{this.state.randomD6}</p>
            <button onClick={this.throwD6.bind(this)} className={styles.button}>Throw</button>
          </div>
          <div className={styles.dice}>
          <img  src={require('./DiceD10.png')} style={{width: '70px', height: '70px'}} />
          <p>{this.state.randomD10}</p>
            <button onClick={this.throwD10.bind(this)} className={styles.button}>Throw</button>
          </div>
          <div className={styles.dice}>
          <img  src={require('./DiceD12.png')} style={{width: '70px', height: '70px'}} />
          <p>{this.state.randomD12}</p>
            <button onClick={this.throwD12.bind(this)} className={styles.button}>Throw</button>
          </div>
          <div className={styles.dice}>
          <img  src={require('./DiceD20.png')} style={{width: '70px', height: '70px'}} />
          <p>{this.state.randomD20}</p>
            <button onClick={this.throwD20.bind(this)} className={styles.button}>Throw</button>
          </div>
        </div>
        <button onClick={this.onNavigateHome}>Return</button>
      </div>
    );
  }
}

export default Dice;
