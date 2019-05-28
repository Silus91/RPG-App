import * as React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import TodoItem from './todoItem';
import { RouteComponentProps } from 'react-router';

// import { addTodo } from './../../actions/todos';

// import { connect } from 'react-redux';
//import { StateInterface } from 'app/reducers';

interface TodoMainInterface extends RouteComponentProps, InjectedFormProps {
  addTodo: (text:string) => void;
}

class TodoMain extends React.Component<TodoMainInterface> {
  constructor(props:any){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  state = {
    todos: [
      { id:1, name:'Questes to be done!' },
      { id:2, name:'Questes to be done!' },
      { id:3, name:'Questes to be done!' },
    ],
  };
  
  handleChange = (e:any) => {
    this.setState({
      ...this.state.todos,
      [e.target.id]:e.target.value
    });
    console.log(e);
  }

  onSubmit(value:any){
    const { reset,addTodo } = this.props;
    console.log(value);
    addTodo(value);
    reset();
  }

  removeTodo(id:number) {
    this.setState({
      todos: this.state.todos.filter((todo:any) => todo.id !== id),
    });
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
        <ul>
            {this.state.todos.map((todo:any) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo} 
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
    };
}

export default reduxForm({ form:'todoMain' })(TodoMain);
