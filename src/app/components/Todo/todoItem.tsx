import * as React from 'react';
import './todoItem.css';

class TodoItem extends React.Component<any, any> {

  removeTodo(id:number) {
    this.props.removeTodo(id);
  }

  render() {
    return(
    <div className="todoItem">
            <div
              className="todoiItemParagraph"
            >
              {this.props.todo.text}
            </div>
        <button className="removeTodoButton" onClick={() => this.removeTodo(this.props.id)}>
          Remove
        </button>
    </div>
    );
  }
}

export default TodoItem;
