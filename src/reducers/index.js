import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import users from './users.js';
import currentUser from './currentUser.js';
import campaigns from './campaigns.js';
import ads from './ads.js';
import urlHistory from './urlHistory.js';
import adverts from './adverts';
import Statistics from './Statistics';
import chart from './chart';

export default combineReducers({
  routing: routerReducer,
  users,
  currentUser,
  campaigns,
  ads,
  urlHistory,
  adverts,
  Statistics,
  chart
});