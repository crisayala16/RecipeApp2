import axios from 'axios';
const boozeReducer = function(state = [], action) {
	switch(action.type){
		case 'FETCH_BOOZE': 
		axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${action.payload}`).then(function(response){
			console.log(state.concat(response.data.drinks[0]));
			return state.concat(response.data.drinks[0]);
		});
	}
	return state;
}
export default boozeReducer;