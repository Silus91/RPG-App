import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import { Dispatch } from "redux";
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { addTodoAction, AddTodo } from './../../actions/todos';
import TodoItem from './todoItem';
import { StateInterface } from 'app/reducers';
import { Todo } from './../../models/Todo';

interface TodoMainInterface extends RouteComponentProps, InjectedFormProps {
  addTodoAction: (text:string) => void;
  todos: Todo[];
  todo:Todo;
}

export type AddTodoProps = {
  addTodoAction: (text: string) => void;
};

class TodoMain extends React.Component<TodoMainInterface, { input: string }> {
  constructor(props:any){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  state = { input: "" };

  removeTodo(id:number) {
    console.log(id);
  }

  updateInput = (input: string) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodoAction(this.state.input);
    this.setState({ input: "" });
    console.log(this.props.todos);
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
          <ul>
            {this.props.todos.map((todo:Todo) => {
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

const mapStateToProps = (state: StateInterface) => {
  return { todos: state.todos.todos };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AddTodo>
): AddTodoProps => {
  return {
    addTodoAction: (s: string) => {
      dispatch(addTodoAction(s));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoMain);

