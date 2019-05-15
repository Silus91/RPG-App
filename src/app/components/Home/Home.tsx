import * as React from 'react';
const styles = require('./Home.css');

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <h1> RPG Helper!</h1>
        <ul>
          <li><a href={'/dice'}>Dice</a></li>
          <li><a href={'/quests'}>Quests</a></li>
          <li><a href={'/profile'}>Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
