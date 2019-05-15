import { createStore, applyMiddleware } from 'redux';
import { reducer, initialState } from '../reducers/index';

const store = createStore(reducer, initialState, applyMiddleware());

export default store;