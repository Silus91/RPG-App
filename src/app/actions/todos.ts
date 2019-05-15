import { ActionTypes } from "./types";
import { Action } from "redux";

let nextTodoId = 0;

export type Actions = AddTodoAction;

export type Todo = { id: number; text: string };

export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}


export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});


export type Action = AddTodoAction;