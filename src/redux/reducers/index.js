import { combineReducers } from 'redux';
import userReducer from './user';
import walletreducer from './wallet';

const rootReducer = combineReducers({ user: userReducer, wallet: walletreducer });

export default rootReducer;
