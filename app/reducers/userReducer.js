const userReducer = function(state = {
	user: {
		name: '',
		age: 0
	}
}, action) {
	switch(action.type){
		case 'FETCH_USER':
		return {...state, user: action.payload};
		break;
	}
	return state;
}
export default userReducer;