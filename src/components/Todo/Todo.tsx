import React from 'react';
import './App.css';
import TodoInput from './todoinput';
import TodoItem from './todoItem';

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

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1> Quests!</h1>
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <ul className="ulApp">
            {this.state.todos.map((todo) => {
              return(
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

export default Todo;
