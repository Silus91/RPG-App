import * as React from 'react';
const styles = require('../../Scss/main.css');

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <h1> RPG Helper!</h1>
          <a href={'/dice'}><div className={styles.button}>Dice</div></a>
          <a href={'/quests'}><div className={styles.button}>Quests</div></a>
          <a href={'/profile'}><div className={styles.button}>Profile</div></a>
      </div>
    </div>
  );
};

export default Home;
