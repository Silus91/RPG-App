import { ADD_TODO } from "./types";
import { Action } from "redux";

// let nextTodoId = 0;

export type Todo = { id: number; text: string };

export interface AddTodo extends Action {
  (text: string): AddTodo
}

export const addTodo = (text: string): AddTodo => {
  return {
    todo,
     type: ADD_TODO,

  }
};
