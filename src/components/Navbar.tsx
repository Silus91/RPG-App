import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="App">
        <p> RPG Helper!</p>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/dice'}>Dice</Link></li>
          <li><Link to={'/todo'}>Todo</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
