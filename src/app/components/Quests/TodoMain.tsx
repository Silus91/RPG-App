import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import { Dispatch } from "redux";
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { addTodoAction, deleteTodoAction, AddTodo, DeleteTodo } from './../../actions/todos';
import TodoItem from './todoItem';
import { StateInterface } from 'app/reducers';
import { Todo } from './../../models/Todo';
const styles = require('../../Scss/main.css');

interface TodoMainInterface extends RouteComponentProps, InjectedFormProps {
  todos: Todo[];
  todo:Todo;
  addTodoAction: (text:string) => void;
  deleteTodoAction: (id: number) => void;
}

export type TodoProps = {
  addTodoAction: (text: string) => void;
  deleteTodoAction: (id: number) => void;
}

class TodoMain extends React.Component<TodoMainInterface, { input: string }> {
  constructor(props:any){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  state = { input: "" };

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  removeTodo(id:number) {
    console.log(id);
    this.props.deleteTodoAction(id);
  }

  updateInput = (input: string) => {
    this.setState({ input });
  }

  handleAddTodo = () => {
    this.props.addTodoAction(this.state.input);
    this.setState({ input: "" });
    console.log(this.props.todos);
  }

  inputRender() {
    return (
      <div className={styles.statContainer}>
        <input
          className={styles.input}
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className={styles.button} onClick={this.handleAddTodo}>
          Add Quest
        </button>
      </div>
    );
  }

  render() {
    return(
      <div className={styles.container}>
        <div
          className={styles.returnButton}
          onClick={this.onNavigateHome}
        >
          <img  src={require(`./../../../imgs/arrow.png`)} className={styles.return}/>
        </div>
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
                  text={todo.text}
                  removeTodo={() => this.removeTodo(todo.id)} 
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
}

const mapDispatchToProps = (
  dispatch: Dispatch<AddTodo | DeleteTodo>
): TodoProps => {
  return {
    addTodoAction: (s: string) => {
      dispatch(addTodoAction(s));
    }, deleteTodoAction: (id:number) => {
      dispatch(deleteTodoAction(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoMain);