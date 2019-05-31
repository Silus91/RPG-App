import { AddTodo } from './../actions/todos';
import { ADD_TODO } from '../actions/types';
import { Todo } from './../models/Todo';

export interface TodoState {
  todos:Todo[];
}

export const initialState: TodoState = {
    todos:[]
  }

export default function(state: TodoState = initialState, action: AddTodo) {
  switch (action.type) {
    case ADD_TODO:
    return {
      ...state, 
      todos:state.todos.concat(action.payload)
    };
    default:
      return state;
  }
}
