import { AddTodo } from './../actions/todos';
import { ADD_TODO } from '../actions/types';

interface Todo {
  id: number,
  name: string,
}

// export type Todos = Todo[];

export interface TodoState {
  todos:Todo[];
}

export const initialState: TodoState = {
  todos:[]
}

function todos(state: TodoState = initialState, action: AddTodo) {
  switch (action.type) {
    case ADD_TODO:
    return [
      ...state,
      {
        id: action.payload.id,
        text: action.payload.text,
      }
    ];
    default:
      return state;
  }
}

export default todos;