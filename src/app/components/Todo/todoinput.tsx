import  * as React from 'react';
import './todoInput.css';

class TodoInput extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  state = { value: '' };

  handleChange(e:any) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo:string) {
    if (
      todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="inputContainer">
        <input
          className="todoInput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="todoButton" onClick={() => this.addTodo(this.state.value)}>
          Submit
        </button>
      </div>
    );
  }
}

export default TodoInput;
