import  * as React from 'react';
const styles = require('./Todo.css');
import TodoInput from './todoinput';
import TodoItem from './todoItem';
import addActionTodo from './../../actions/index';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todo extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  state = {
    todos: [
      { id:1, text:'Questes to be done!' },
    ], nextId:2,
  };

  addTodo(todoText:string) {
    const todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText });
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
      <div className={styles.app}>
        <button  className={styles.button} onClick={this.onNavigateHome}>Return</button>
        <div className={styles.container}>
          <h1> Quests!</h1>
          <TodoInput
            todoText=""
            addTodo={this.addTodo}
            onClick={()=>this.props.addActionTodo(Todo)}
          />
          <ul className={styles.ulApp}>
            {this.state.todos.map((todo) => {
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

function matchDispatchToProps (dispatch:any) {
  return bindActionCreators({addActionTodo: addActionTodo}, dispatch)
}

export default connect (matchDispatchToProps)(Todo);
