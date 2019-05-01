import { combineReducers } from 'redux';
import todosReducer from './todos';
import profileReducer, { ProfileState } from './profile';
import { reducer as formReducer, FormReducer } from 'redux-form'


export interface StateInterface {
  profile: ProfileState;
  form: FormReducer;
}

 export default combineReducers ({
    todos:todosReducer,
    profile: profileReducer,
    form: formReducer

});