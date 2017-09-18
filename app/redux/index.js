import { combineReducers } from 'redux';

import Nav from './Nav'
import MyAuth from './Auth'
import OldAuth from './OldAuth'
import User from './User'
import Network from './Network'
import Lifts from './Lifts'




const AppReducer = combineReducers({
  Nav,
  OldAuth,
  MyAuth,
  User,
  Network,
  Lifts,
});

export default AppReducer;
