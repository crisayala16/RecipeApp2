import React from 'react';
import {connect} from 'react-redux';
import store from './../../store.js';
import * as user from './../../actions/userActions.js';
import * as booze from './../../actions/boozeActions.js';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
class Search extends React.Component{
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
			<div>
			<form onSubmit={this.getBooze.bind(this)}>
			<TextField
		    floatingLabelText="Starter"
		    name='starter'
		    onChange={this.handleStarter}
		    />
		    <FloatingActionButton mini={true} type='submit'>
		      <ContentAdd />
		    </FloatingActionButton>
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

export default connect(mapStateToProps)(Search);