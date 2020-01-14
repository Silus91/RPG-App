import React, { Component } from 'react';
import TodoMain from '../Quests/TodoMain';

class ListCreator extends Component {

  // when typed name and accepted new list of todos will be created with name and chance to add quests or other stuff
  render() {
    return (
      <div>
        <button>Add new List</button>
        <div>
          <TodoMain />
        </div>
        <div>
          <TodoMain />
        </div>
      </div>
    )
  }
}

export default ListCreator;
