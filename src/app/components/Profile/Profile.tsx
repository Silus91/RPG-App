import * as React from 'react';
import { connect } from 'react-redux';
import { StateInterface } from 'app/reducers';
import { RouteComponentProps } from 'react-router';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { changeStat } from '../../actions';
// import { input } from './../../models/Input';

const styles = require('../../Scss/main.css');
const profile = new Set<string>(['hp', 'exp', 'gold', 'mana']);

interface ProfileInterface extends RouteComponentProps, InjectedFormProps {
  profile: {[key:string]:number};
  changeStat: (stat:{[stat:string]:number}) => void;
}

function renderField(field:any) {
  const { meta: { touched, error } } = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  return (
    <div className={className}>
      <input 
        className={styles.input}
        type="text"
        {...field.input}
      />
      <div>
        {touched ? error : ''}
      </div>
    </div>
  )
}

class Profile extends React.Component<ProfileInterface, any> {
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  handleChange = (e:any) => {
    this.setState({
      ...this.props.profile,
      [e.target.id]:e.target.value
    });
  }

  handleSubmit(values:any){
    const { reset,changeStat } = this.props;
    changeStat(values);
    reset();
  }

  statsRender() {
    const { handleSubmit } = this.props;

    return Array.from(profile).map((stat, index) => (
      <React.Fragment key={index}>
        <div className={styles.statContainer}>
          <h3>{stat}</h3>
          <Field name={stat} component={renderField} type="text"/>
          <button
            className={styles.button}
            onClick={handleSubmit(this.handleSubmit)}
          >
            Submit
          </button>
          <br />
        </div>
      </React.Fragment>
    ));
  }

  renderHeaders() {
    return Array.from(profile).map((stat, index) => (
      <div key={index}>
        <h2>{stat}={this.props.profile[stat]}</h2>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.container}>
        <div 
          className={styles.returnButton}
          onClick={this.onNavigateHome}
        >
          <img  src={require(`./../../../imgs/arrow.png`)} className={styles.return}/>
        </div>
        <h1>Profile Stats!</h1>
        <div className={styles.profileContainer}>
          <div className={styles.headersContainer}>
            {this.renderHeaders()}
          </div>
          <div className={styles.statsContainer}>
            {this.statsRender()}
          </div>
        </div>
      </div>
    );
  }
}

function validate(values:any) {
  const errors:any = {};

  if (!values.input) {
    errors.input = 'Input cant be empty';
  }
  return errors;
}


function mapStateToProps(state:StateInterface){
  return {
    profile: state.profile
  }
}

export default reduxForm<any,any> ({validate, form:'profileForm'}) (connect (mapStateToProps, {changeStat}) (Profile));
