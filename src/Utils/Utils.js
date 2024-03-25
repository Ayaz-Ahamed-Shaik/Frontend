import {createStore, combineReducers, applyMiddleware} from 'redux';
import  {Reducer} from '../API/Api.js'; // Import your root reducer


// Create the Redux store
const store = createStore(Reducer);

export default store;