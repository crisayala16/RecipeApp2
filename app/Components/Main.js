import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabBar from './TabBar.js';
import axios from 'axios';

class Main extends React.Component{
	render(){
		console.log(this.props.booze);
		return(
			<MuiThemeProvider>
				<TabBar/>
			</MuiThemeProvider>
		);
	}
}

export default Main;