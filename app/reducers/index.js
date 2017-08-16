import {combineReducers} from 'redux';

import booze from './boozeReducer';
import user from './userReducer';

export default combineReducers({
	user,
	booze
});