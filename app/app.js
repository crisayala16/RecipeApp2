import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main.js';
import {Provider} from 'react-redux';
import store from './store.js';

ReactDOM.render((
	<Provider	store={store}>
		<Main/>
	</Provider>
	), document.getElementById('app')
);