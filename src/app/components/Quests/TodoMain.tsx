import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import { Dispatch } from "redux";
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { addTodo, AddTodo } from './../../actions/todos';
// import { Todos } from "./../../reducers/todos";

import { StateInterface } from 'app/reducers';

interface TodoMainInterface extends RouteComponentProps, InjectedFormProps {
  addTodo: (text:string) => void;
}

export type AddTodoProps = {
  addTodo: (text: string) => void;
};

class TodoMain extends React.Component<TodoMainInterface, { input: string }> {
  constructor(props:any){
    super(props);

  }

  state = { input: "" };

  //   removeTodo(id:number) {
  //   this.setState({
  //     todos: this.state.todos.filter((todo:any) => todo.id !== id),
  //   });
  // }

  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  inputRender() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }

  render() {
    return(
      <div>
        <h1>Quests!</h1>
        <div>
          {this.inputRender()}
        </div>
        <div>
          todosy wyrenderowane
        </div>
      </div>
    );
    };
}

const mapStateToProps = (state: StateInterface): {} => {
  return { input: "" };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddTodo>
): AddTodoProps => {
  return {
    addTodo: (s: string) => {
      dispatch(addTodo(s));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoMain);

