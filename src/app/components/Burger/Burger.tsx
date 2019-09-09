import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
const styles = require('../../Scss/main.css');


class Burger extends React.Component<any,any> {



  // const hamburger = document.querySelector('.hamburger');

  // const nav = document.querySelector('.navigation');
  
  // const handleClick = () => {
  //   hamburger.classList.toggle('hamburger--active');
  //   nav.classList.toggle('navigation--active');
  // }
  
  // hamburger.addEventListener('click', handleClick);


 renderBurger() {
   return (
      <div className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}><a href="">Lorem</a></li>
          <li className={styles.navigation__item}><a href="">Ipsum</a></li>
          <li className={styles.navigation__item}><a href="">Dolor</a></li>
          <li className={styles.navigation__item}><a href="">Sit</a></li>
        </ul>
      </div>
   )
 } 
    render(){
      return(
      <div>
        <button  className={styles.hamburger}>
          <span className={styles.hamburger__box}>
            <span className={styles.hamburger__inner}>
              {this.renderBurger()}
            </span>
          </span>
        </button>
      </div>

      )
    }

}
export default Burger;
