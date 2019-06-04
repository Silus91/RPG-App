import { ADD_TODO } from "./types";
import { Action } from "redux";

 let nextTodoId = 0;

export type Action = AddTodo;

export type Todo = { id: number; text: string };

export interface AddTodo extends Action {
  payload: Todo;
}

export const addTodoAction = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});
