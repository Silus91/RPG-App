import * as React from 'react';
import { Link, BrowserRouter } from 'react-router-dom'


const styles = require('../../Scss/main.css');
const Home = () => {
  return (
    <div className={styles.container}>
      <h1> RPG HELPER!</h1>
      <div className={styles.appContainer}>
        <BrowserRouter>
          <Link to='/dice'><div className={styles.button}>Dice</div></Link>
          <Link to={'/todoMain'}><div className={styles.button}>Quests</div></Link>
          <Link to={'/profile'}><div className={styles.button}>Profile</div></Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Home;
