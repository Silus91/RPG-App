import * as React from 'react';
// import { Todo } from './../../models/Todo';


// interface TodoItemInterface {
//   todos:[];
//   todo:Todo;
//   id:number;
//   text: string;
//   removeTodo: (id:number) => void;
// }


class TodoItem extends React.Component<any, any> {

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
