import * as React from 'react';
const styles = require('../../Scss/main.css');

const Home = () => {
  return (
    <div className={styles.container}>
      <h1> RPG HELPER!</h1>
      <div className={styles.appContainer}>
        <a href={'/dice'}><div className={styles.button}>Dice</div></a>
        <a href={'/quests'}><div className={styles.button}>Quests</div></a>
        <a href={'/profile'}><div className={styles.button}>Profile</div></a>
      </div>
    </div>
  );
};

export default Home;
