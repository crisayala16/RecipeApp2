import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import widgetReducer from './widgetReducer.js';

const reducers = combineReducers({
	userState: userReducer,
	widgetState: widgetReducer
});

export default reducers;

