import {combineReducers} from '@reduxjs/toolkit';
import UserProfilReducer from './userProfile';

const rootReducer = combineReducers({
  userProfile: UserProfilReducer,
});

export default rootReducer;
