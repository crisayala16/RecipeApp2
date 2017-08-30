import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabBar from './TabBar.js';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Search from './Containers/Search.js';
class Main extends React.Component{
	render(){
		return(
			<MuiThemeProvider>
				<div>
				<Route path='/' component={TabBar}/>
				<Route path='/search' component={Search}/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Main;