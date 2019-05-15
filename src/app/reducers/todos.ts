import Todo from '../models/Todo';
import { Action } from '../actions/todos';
import { ActionTypes } from '../actions/types';

export type Todos = Todo[];

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: []
}

// export function reducer(state: TodoState = initialState, action: Action) {
//   switch (action.type) {
//       case ActionTypes.ADD_TODO:
//       return {
//         ...state,
//         {
//           id: action.payload.id,
//           text: action.payload.text,
//         }
//       };

//     default:
//       return state;
//   }
// }