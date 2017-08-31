import React from 'react';
import {connect} from 'react-redux';
import store from './../../store.js';
import * as user from './../../actions/userActions.js';
import * as booze from './../../actions/boozeActions.js';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IngList from './../Presentational/IngList.js';

class Search extends React.Component{
	getUser(){
		store.dispatch(user.fetchUser());
	}
	getBooze(e){
		e.preventDefault();
		let ingredient;
		if(this.props.ingredients.length > 0){
			ingredient = this.props.ingredients[0];
		}
		else if(this.props.ingredients.length === 0){
			ingredient = e.target.ingredient.value;
		}
		axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`).then(function(response){
			store.dispatch(booze.fetchBooze(response.data.drinks));
		});
		this.addIngredient(e.target.ingredient.value);

	}
	addIngredient(ingredient){
		store.dispatch(booze.addIngredient(ingredient));
	}
	removeIngredient(ingredient){
		let removePromise = new Promise((resolve, reject) => {
				store.dispatch(booze.removeIngredient(ingredient));
				resolve('Good to go!');
			});
		const self = this;
		removePromise.then(function(){
			axios.get(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${self.props.ingredients[0]}`).then(function(response){
				store.dispatch(booze.fetchBooze(response.data.drinks));
			});
		});
	}
	render(){
		return(
			<div>
			<form onSubmit={this.getBooze.bind(this)}>
			<TextField
		    floatingLabelText='Ingredient'
		    name='ingredient'
		    />
		    <FloatingActionButton mini={true} type='submit'>
		      <ContentAdd/>
		    </FloatingActionButton>
			</form>
			<IngList removeIngredient={this.removeIngredient.bind(this)} data={this.props.ingredients}/>
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
		ingredients: store.booze.ingredients,
		booze: store.booze.results
	};
}

export default connect(mapStateToProps)(Search);