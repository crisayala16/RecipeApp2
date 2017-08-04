import React from 'react';
import {connect} from 'react-redux';
import store from './../store.js';
import * as user from './../actions/userActions.js';

class Main extends React.Component{
	getUser(){
		store.dispatch(user.fetchUser());
	}
	render(){
		return(
			<div>
			<h2>{this.props.user.name}</h2>
			<button onClick={this.getUser}></button>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		user: store.userState.user
	};
}

export default connect(mapStateToProps)(Main);