import * as React from 'react';



class TodoMain extends React.Component {
  constructor(props:any){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.removeTodo = this.removeTodo.bind(this);
  }

  state = {
    todos: [
      { id:1, name:'Questes to be done!' },
    ],
  };
  
  handleChange = (e:any) => {
    this.setState({
      ...this.props.profile,
      [e.target.id]:e.target.value
    });
  }

  handleSubmit(values:any){
    const { reset,changeStat } = this.props;
    console.log(values);
    changeStat(values);
    reset();
  }


  inputRender(){
    return(
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button  type="submit" onClick={() => this.handleSubmit(this.state.value)}>
          Submit
        </button>
      </form>
    )
  }

  todoRender() {
    return (
      <div>
        <div>
          {this.props.todo.name}
        </div>
        <button onClick={() => this.removeTodo(this.props.id)}>
          Remove
        </button>
      </div>
    )
  }


  // {this.state.todos.map((todo:any) => {

  render() {
    return(
      <div>
        <div>
          {this.inputRender}
        </div>
        <div>
          {}
        </div>
      </div>
    );
    };
}

export default TodoMain;
