import { combineReducers } from 'redux';
import todosReducer, { TodoState} from './todos';
import { reducer as formReducer, FormReducer } from 'redux-form';
import profileReducer, { ProfileState } from './profile';


export interface StateInterface {
  todos: TodoState;
  profile: ProfileState;
  form: FormReducer;
}

export const rootReducer = combineReducers ({
  profile: profileReducer,
  form: formReducer,
  todos: todosReducer,
});
