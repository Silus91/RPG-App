import * as React from 'react';
const styles = require('./todoItem.css');

class TodoItem extends React.Component<any, any> {

  removeTodo(id:number) {
    this.props.removeTodo(id);
  }

  render() {
    return(
    <div className={styles.todoItem}>
            <div className={styles.todoiItemParagraph}>
              {this.props.todo.name}
            </div>
        <button className={styles.removeTodoButton} onClick={() => this.removeTodo(this.props.id)}>
          Remove
        </button>
    </div>
    );
  }
}

export default TodoItem;
