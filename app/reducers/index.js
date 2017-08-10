import {combineReducers} from 'redux';

import booze from './boozeReducer';
import starter from './starterReducer';
import extras from './extrasReducer';
import user from './userReducer';

export default combineReducers({
	user,
	starter,
	extras,
	booze
});