import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main.js';
import {Provider} from 'react-redux';
import store from './store.js';
import {HashRouter} from 'react-router-dom';

ReactDOM.render((
	<Provider store={store}>
		<HashRouter>
			<Main/>
		</HashRouter>
	</Provider>
	), document.getElementById('app')
);