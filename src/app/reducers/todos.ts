import { AddTodo } from './../actions/todos';
import { ADD_TODO } from '../actions/types';


export interface TodoState {
  id: number,
  text: string,
}

export const initialState: TodoState = [
  {
    id,
    text
  }
]

export default function(state: TodoState = initialState, action: AddTodo) {
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
