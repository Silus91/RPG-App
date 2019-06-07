import * as React from 'react';
import { Todo } from './../../models/Todo';


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
      <li>
        <div>
          {this.props.todo.text}
        </div>
        <button onClick={() => this.removeTodo(this.props.id)}>
          Remove
        </button>
    </li>
    );
  }
}

export default TodoItem;
