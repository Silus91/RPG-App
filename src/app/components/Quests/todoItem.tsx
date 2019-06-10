import * as React from 'react';
import { Todo } from './../../models/Todo';
const styles = require('../../Scss/main.css');


interface TodoItemInterface {
  id:number;
  text: string;
  todo:Todo;
  removeTodo: (id:number) => void;
}


class TodoItem extends React.Component<TodoItemInterface, any> {

  removeTodo(id:number) {
    this.props.removeTodo(id);
  }

  render() {
    return(
      <div className={styles.todoItem}>
        <p>
          {this.props.todo.text}
        </p>
        <button className={styles.button} onClick={() => this.removeTodo(this.props.id)}>
          Remove
        </button>
    </div>
    );
  }
}

export default TodoItem;
