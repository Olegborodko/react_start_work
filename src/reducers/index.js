import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import testArray from './testArray.js';
import testArray2 from './testArray2.js';

export default combineReducers({
  routing: routerReducer,
  testArray,
  testArray2
});