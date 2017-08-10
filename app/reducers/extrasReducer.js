import axios from 'axios';
const extrasReducer = function(state = [], action) {
	switch(action.type){
		case 'FETCH_EXTRAS': 
		axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${action.payload}`).then(function(response){
			return [...state, response.data.drinks];
		});
		break;
	}
	return state;
}
export default extrasReducer;