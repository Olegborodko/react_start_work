import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import users from './users.js';
import currentId from './currentId.js';
import campaigns from './campaigns.js';
import ads from './ads.js';

export default combineReducers({
  routing: routerReducer,
  users,
  currentId,
  campaigns,
  ads
});