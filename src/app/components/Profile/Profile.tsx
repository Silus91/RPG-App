
import * as React from 'react';
import { connect } from 'react-redux';
import { StateInterface } from 'app/reducers';
import { RouteComponentProps } from 'react-router';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { changeStat } from '../../actions';
const styles = require('./Profile.css');

const profile = new Set<string>(['hp', 'exp', 'gold']);

interface ProfileInterface extends RouteComponentProps, InjectedFormProps {
  profile: {[key:string]:number};
  changeStat: (stat:{[stat:string]:number}) => void;
}

class Profile extends React.Component<ProfileInterface, any> {
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e:any) => {
    this.setState({
      ...this.props.profile,
      [e.target.id]:e.target.value
    });
  }

  handleSubmit(values:any){
    const { reset,changeStat } = this.props;
    console.log(values);
    changeStat(values);
    reset();
  }

  statsRender() {
    const { handleSubmit } = this.props;

    return Array.from(profile).map((stat, index) => (
      <React.Fragment key={index}>
        <label>{stat}</label>
        <Field name={stat} component="input" type="text" />
        <button onClick={handleSubmit(this.handleSubmit)}>Submit</button>
        <br />
      </React.Fragment>
    ));
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  renderHeaders() {
    return Array.from(profile).map((stat, index) => (
      <div key={index}>
        {stat}={this.props.profile[stat]}
      </div>
      ));
  }

  render() {
    return (
      <div className={styles.app}>
        <button onClick={this.onNavigateHome}>Return</button>
        <div>
          <h1>Profile Stats!</h1>
          {this.renderHeaders()}
          {this.statsRender()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:StateInterface){
  return {
    profile: state.profile
  }
}

export default reduxForm<any,any> ({form:'profileForm'}) (connect (mapStateToProps, {changeStat}) (Profile));