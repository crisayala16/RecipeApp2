import React from 'react';
import {connect} from 'react-redux';
import store from './../store.js';
import * as user from './../actions/userActions.js';
import * as booze from './../actions/boozeActions.js';

class Main extends React.Component{
	getUser(){
		store.dispatch(user.fetchUser());
	}
	getBooze(e){
		e.preventDefault();
		console.log(e.target.starter.value);
		store.dispatch(booze.fetchBooze(this.props.starter));
	}
	handleStarter(event){
		event.preventDefault();
		const starter = event.target.value;
		store.dispatch(booze.handleStarter(starter));
	}
	render(){
		return(
			<div>
			<h2>{this.props.user.name}</h2>
			<h3>Age: {this.props.user.age}</h3>
			<button onClick={this.getUser}>Get Name</button>
			<form onSubmit={this.getBooze.bind(this)}>
			<input type='text' name='starter' onChange={this.handleStarter}/>
			<button type='submit'>Find Booze</button>
			</form>
			<ul>
				{
					// this.props.booze.map((item)=>{
					// 	return(
					// 		<li key={item.idDrink}>
					// 			{item.strDrink}
					// 		</li>
					// 	)
					// })
				}
			</ul>
			</div>
		);
	}
}

const mapStateToProps = function(store) {
	return {
		user: store.user.user,
		starter: store.starter.starter,
		extras: store.extras,
		booze: store.booze
	};
}

export default connect(mapStateToProps)(Main);