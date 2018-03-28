import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import testArray from './testArray.js';
import testArray2 from './testArray2.js';
import users from './users.js';
import currentId from './currentId.js';
import campaigns from './campaigns.js';
import trigger from './trigger.js';

export default combineReducers({
  routing: routerReducer,
  testArray,
  testArray2,
  users,
  currentId,
  campaigns,
  trigger
});