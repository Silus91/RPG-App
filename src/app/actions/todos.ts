import { ADD_TODO, DELETE_TODO } from "./types";
import { Action } from "redux";
import { Todo } from './../models/Todo';

let nextTodoId = 0;

export interface AddTodo extends Action {
  payload: Todo;
}

export interface DeleteTodo extends Action {
  payload: {id:number};
}

export const addTodoAction = (text: string): AddTodo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    text: text
  }
});

export const deleteTodoAction = (id: number): DeleteTodo =>  ({
  type: DELETE_TODO,
  payload: {
    id
  }
});
