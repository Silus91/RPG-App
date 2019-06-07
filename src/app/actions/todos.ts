import { ADD_TODO, DELETE_TODO } from "./types";
import { Action } from "redux";

 let nextTodoId = 0;

export type Action = AddTodo | DeleteTodo;

export type Todo = { id: number; text: string };

export interface AddTodo extends Action {
  payload: Todo;
}

export interface DeleteTodo extends Action {
  payload: (id:number) => void;
}

export const addTodoAction = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});

export const deleteTodoAction = (id: number) =>  ({
  type: DELETE_TODO,
  payload: {
    id
  }
});
  
 
  

