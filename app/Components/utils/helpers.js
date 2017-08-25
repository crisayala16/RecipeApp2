import * as booze from './../../actions/boozeActions.js';
import store from './../../store.js';

let helpers = {
	removeIng: function(item){
		store.dispatch(booze.removeExtra(item));
	}
};
export default helpers;