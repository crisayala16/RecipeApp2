import React from 'react';
import {connect} from 'react-redux';
import store from './../store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as user from './../actions/userActions.js';
import * as booze from './../actions/boozeActions.js';
import TabBar from './Children/TabBar.js';
import axios from 'axios';

class Main extends React.Component{
	getUser(){
		store.dispatch(user.fetchUser());
	}
	getBooze(event){
		event.preventDefault();
		const starter = event.target.starter.value;
		const results = axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${starter}`);
		store.dispatch(booze.fetchBooze(results));
		console.log(results);
	}
	handleStarter(event){
		event.preventDefault();
		const starter = event.target.value;
		store.dispatch(booze.handleStarter(starter));
	}
	render(){
		console.log(this.props.booze);
		return(
			<MuiThemeProvider>
			<div>
			<TabBar/>
			<h2>{this.props.user.name}</h2>
			<h3>Age: {this.props.user.age}</h3>
			<button onClick={this.getUser}>Get Name</button>
			<form onSubmit={this.getBooze.bind(this)}>
			<input type='text' name='starter' onChange={this.handleStarter}/>
			<button type='submit'>Find Booze</button>
			</form>
			<div>
				{
					this.props.booze.map((item)=>{
						return(
							<div key={item.idDrink}>
								<h3>{item.strDrink}</h3>
								<img src={item.strDrinkThumb} width='150'/>
							</div>
						)
					})
				}
			</div>
			</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		user: store.user.user,
		starter: store.booze.starter,
		extras: store.booze.extras,
		booze: store.booze.results
	};
}

export default connect(mapStateToProps)(Main);