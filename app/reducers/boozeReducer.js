import axios from 'axios';
const boozeReducer = function(state = {results: []}, action) {
	switch(action.type){
		case 'FETCH_BOOZE_FULFILLED': 
		return {...state, results: action.payload.data.drinks};
		break;
	}
	return state;
}
export default boozeReducer;