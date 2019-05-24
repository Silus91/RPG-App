import  * as React from 'react';
const styles = require('../../Scss/main.css');
import TodoInput from './todoinput';
import TodoItem from './todoItem';
import { addTodo } from '../../actions/todos';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { RouteComponentProps } from 'react-router';
import { StateInterface } from 'app/reducers';


interface QuestsInterface extends RouteComponentProps, InjectedFormProps {
  addTodo: (value: string) => void;
  history:any;
}


class Quests extends React.Component<QuestsInterface, any> {
  constructor(props:any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  state = {
    todos: [
      { id:1, name:'Questes to be done!' },
    ], nextId:2,
  };

  handleSubmit(todoText:string) {
    const todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, name: todoText });
    this.setState({ todos: todos, nextId: ++this.state.nextId });
  }

  removeTodo(id:number) {
    this.setState({
      todos: this.state.todos.filter((todo:any) => todo.id !== id),
    });
  }

  onNavigateHome = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className={styles.container}>
        <button  className={styles.button} onClick={this.onNavigateHome}>Return</button>
        <div>
          <h1> Quests!</h1>
          <TodoInput
            todoText=""
            handleSubmit={this.handleSubmit}
          />
          <ul className={styles.ulApp}>
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
  }
}

 function mapStateToProps (state:StateInterface) {
  todos: state.todos
}

export default connect(mapStateToProps, {handleSubmit: addTodo})(Quests);
