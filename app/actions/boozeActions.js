export function fetchBooze(results){
	return {
		type: 'FETCH_BOOZE',
		payload: results
	}
}

export function addIngredient(ingredient){
	return {
		type: 'ADD_INGREDIENT',
		payload: ingredient
	}
}

export function removeIngredient(ingredient){
	return {
		type: 'REMOVE_INGREDIENT',
		payload: ingredient
	}
}