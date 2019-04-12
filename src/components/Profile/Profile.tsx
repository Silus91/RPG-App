import * as React from 'react';

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

  render() {
    return (
      <div className="App">
        <h1>Beggining kurwa</h1>
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
    );
  }
}

export default Profile;
