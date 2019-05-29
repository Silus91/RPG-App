import { ADD_TODO } from "./types";
import { Action } from "redux";

 let nextTodoId = 0;

export type Actions = AddTodo;

export type Todo = { id: number; text: string };

export interface AddTodo extends Action {
  (text: string): AddTodo;
  payload: Todo;
}

export const addTodo = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});