import * as React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="App">
        <p> RPG Helper!</p>
        <ul>
          <li><a href={'/dice'}>Dice</a></li>
          <li><a href={'/todo'}>Todo</a></li>
          <li><a href={'/profile'}>Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
