import axios from 'axios';
const starterReducer = function(state = {
	starter: ''
}, action) {
	switch(action.type){
		case 'HANDLE_STARTER':
		return {...state, starter: action.payload};
		break;
	}
	return state;
}
export default starterReducer;