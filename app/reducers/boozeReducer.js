import axios from 'axios';
const initialState = {
	starter: '',
	extras: [],
	results: []
};
const boozeReducer = function(state = initialState, action) {
	switch(action.type){
		case 'HANDLE_STARTER': 
		return {...state, starter: action.payload};
		break;
		case 'HANDLE_EXTRAS': 
		return {...state, extras: action.payload};
		break;
		case 'FETCH_BOOZE_FULFILLED': 
		return {...state, results: action.payload.data.drinks};
		break;
	}
	return state;
}
export default boozeReducer;