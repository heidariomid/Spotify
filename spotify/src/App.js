import React, {useEffect} from 'react';
import {getTokenFromResponse} from './util/spotify';
import {Login} from './component';
import './App.css';

function App() {
	useEffect(() => {
		const token = getTokenFromResponse();
		console.log(token);
	}, []);
	return (
		<div className="App">
			<Login />
		</div>
	);
}

export default App;
