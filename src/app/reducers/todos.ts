import { AddTodo, DeleteTodo } from './../actions/todos';
import { ADD_TODO, DELETE_TODO } from '../actions/types';
import { Todo } from './../models/Todo';

export interface TodoState {
  todos:Todo[];
}

export const initialState: TodoState = {
    todos:[]
  }

export default function(state: TodoState = initialState, action: AddTodo&DeleteTodo) {
  switch (action.type) {
    case ADD_TODO:
    return {
      ...state, 
      todos:state.todos.concat(action.payload)
    };

    case DELETE_TODO:
    return {
      ...state, 
      todos: state.todos.filter((todo:Todo) => todo.id !== action.payload.id),
    }
    
    default:
      return state;
  }
}
