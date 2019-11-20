import * as React from 'react';
import { Link } from 'react-router-dom';

const styles = require('../../Scss/main.css');

const Home = () => {
  return (
    <div className={styles.container}>
      <h1> RPG HELPER!</h1>
      <img  src={require(`./../Dice/DiceD6.png`)} className={styles.img}/>
      <div className={styles.appContainer}>
        <Link to='/dice'><div className={styles.button}>Dice</div></Link>
        <Link to='/todoMain'><div className={styles.button}>Quests</div></Link>
        <Link to='/profile'><div className={styles.button}>Profile</div></Link>
        <Link to='/challange'><div className={styles.button}>Challange</div></Link>

      </div>
    </div>
  );
};

export default Home;
