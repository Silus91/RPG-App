import * as React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

// import { connect } from 'react-redux';
//import { StateInterface } from 'app/reducers';

interface TodoMainInterface extends InjectedFormProps {

}

class TodoMain extends React.Component<TodoMainInterface> {
  constructor(props:any){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    todos: [
      { id:1, name:'Questes to be done!' },
    ],
  };
  
  handleChange = (e:any) => {
    // this.setState({
    //   ...this.state.todos,
    //   [e.target.id]:e.target.value
    // });
    console.log(e);
  }

  onSubmit(value:any){
    // const { reset,addTodo } = this.props;
    console.log(value);
    // addTodo(values);
    // reset();
  }


  inputRender(){
      const { handleSubmit } = this.props;

    return(
      <form>
        <input onChange={this.handleChange} type="text"/>
        <button onClick={handleSubmit(this.onSubmit)}>
          Submit
        </button>
      </form>
    )
  }


  render() {
    return(
      <div>
        <h1>Quests!</h1>
        <div>
          {this.inputRender()}
        </div>
        <div>
          {}
        </div>
      </div>
    );
    };
}

export default reduxForm({ form:'todoMain' })(TodoMain);
