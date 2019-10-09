import * as React from 'react';
const styles = require('../Scss/main.css');


class ReturnToMain extends React.Component<any,any> {
  constructor(props:any) {
    super(props); 
  }
  
  onNavigateHome = () => {
    this.props.history.push("/");
  }
  
  render () {
    return (
      <div      
        className={styles.returnButton}
        onClick={this.onNavigateHome}
      >
        <img  src={require(`./../../imgs/arrow.png`)} className={styles.return}/>
      </div> 
    );
  }
}

export default ReturnToMain;