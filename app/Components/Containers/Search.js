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
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IngAutoComplete from './../Presentational/IngAutoComplete.js';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '800px',
    height: '800px',
    overflowY: 'auto',
  },
  drinksHead: {
  	fontSize: 20
  },
  actBtn: {
	  display: 'inline-block',
	  margin: '10px'
  }
};

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
		e.target.ingredient.value = '';

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
	setListOfIngredients(){
		axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
		.then((response)=>{
	      let drinks = [];
	      const data = response.data.drinks;
	      for(var i = 0; i < data.length; i++){
	        drinks.push(data[i].strIngredient1);
	      }
	      console.log(drinks);
		  store.dispatch(booze.setListOfIngredients(drinks));
	    });
	}
	render(){
		return(
			<div>
			<form onSubmit={this.getBooze.bind(this)}>
		    <IngAutoComplete 
		    searchText={this.props.ingredients[0]}
		    floatingLabelText='Ingredient'
		    setListOfIngredients={this.setListOfIngredients}
		    listOfIngredients={this.props.listOfIngredients}
		    />
		    <FloatingActionButton style={styles.actBtn} mini={true} type='submit'>
		      <ContentAdd/>
		    </FloatingActionButton>
			</form>
			<IngList removeIngredient={this.removeIngredient.bind(this)} data={this.props.ingredients}/>
			<div style={styles.root}>
				<GridList
				cellHeight={180}
				cols={3}
				padding={2}
				style={styles.gridList}
				>
				<Subheader>Drinks</Subheader>
				{
					this.props.booze.map((item)=>{
						return(
							<GridTile 
							key={item.idDrink}
							title={item.strDrink}
							actionIcon={<IconButton><StarBorder color='white'/></IconButton>}
							>
								<img src={item.strDrinkThumb}/>
							</GridTile>
						)
					})
				}
				</GridList>
			</div>

			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		user: store.user.user,
		ingredients: store.booze.ingredients,
		booze: store.booze.results,
		listOfIngredients: store.booze.listOfIngredients,
		searchText: store.booze.searchText
	};
}

export default connect(mapStateToProps)(Search);