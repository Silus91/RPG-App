import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
const styles = require('../../Scss/main.css');


class Burger extends React.Component<any,any> {


 
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
