const initialState = {
	ingredients: [],
	results: []
};
const boozeReducer = function(state = initialState, action) {
	switch(action.type){
		case 'ADD_INGREDIENT': 
		return {...state, ingredients: state.ingredients.concat(action.payload)};
		break;
		case 'REMOVE_INGREDIENT':
		return {...state, ingredients: state.ingredients.filter((item)=> {return item != action.payload})};
		break;
		case 'FETCH_BOOZE': 
		return {...state, results: action.payload};
		break;
	}
	return state;
}
export default boozeReducer;