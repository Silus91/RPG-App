import { combineReducers } from 'redux';
import * as fromTodos from './todos';
import profileReducer, { ProfileState } from './profile';
import { reducer as formReducer, FormReducer } from 'redux-form';

export interface StateInterface {
  todos: fromTodos.TodoState;
  profile: ProfileState;
  form: FormReducer;
}

export default combineReducers ({
  profile: profileReducer,
  form: formReducer
});