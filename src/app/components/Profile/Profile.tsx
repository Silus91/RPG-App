import * as React from 'react';
const styles = require('./Profile.css');


class Profile extends React.PureComponent<any, any> {
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state:any = {
    profile:{
      hp: null,
      exp: null,
      gold: null,
    },
  };

  handleChange = (e:any) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e:any) => {
    this.setState({
      profile: {
        ...this.state.profile,
        target: e
      },
    });
    console.log(this.state);
  }

  statsRender() {
    return (
      <div>
        <label>Hp</label>
        <input type="text" id="hp" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => this.handleSubmit(this.state.value)}>Submit</button>
        <br />
        <label>Exp</label>
        <input type="text" id="exp" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => this.handleSubmit(this.state.value)}>Submit</button>
        <br />
        <label>Gold</label>
        <input type="text" id="gold" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => this.handleSubmit(this.state.value)}>Submit</button>
      </div>
    );
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className={styles.app}>
        <button onClick={this.onNavigateHome}>Return</button>
        <div>
          <h1>Profile Stats!</h1>
          <div>
            Hp={this.state.hp}
          </div>
          <div>
            Exp={this.state.exp}
          </div>
          <div>
            Gold={this.state.gold}
          </div>
          {this.statsRender()}
        </div>
      </div>
    );
  }
}

export default Profile;


// this.handleChange = this.handleChange.bind(this);
// this.addTodo = this.addTodo.bind(this);
// }

// state = { value: '' };

// handleChange(e:any) {
// this.setState({ value: e.target.value });
// }

// addTodo(todo:string) {
// if (
//   todo.length > 0) {
//   this.props.addTodo(todo);
//   this.setState({ value: '' });
// }
// }

// render() {
// return (
//   <div className={styles.inputContainer}>
//     <input
//       className={styles.todoInput}
//       type="text"
//       value={this.state.value}
//       onChange={this.handleChange}
//     />
//     <button className={styles.todoButton} onClick={() => this.addTodo(this.state.value)}>
//       Submit
//     </button>
//   </div>
// );
// }