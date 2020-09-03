import React, {useEffect, useState} from 'react';
import {getTokenFromResponse} from './util/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {Login, Player} from './component';
import './App.css';

function App() {
	const spotify = new SpotifyWebApi();
	const [token, setToken] = useState(null);
	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = '';
		const _token = hash.access_token;
		const tokenHandler = async () => {
			if (_token) {
				setToken(_token);
				spotify.setAccessToken(_token);
				const data = await spotify.getMe();
				console.log(data);
			} else {
				setToken(null);
			}
		};
		tokenHandler();
	}, []);
	const hasToken = !token ? <Login /> : <Player />;
	return <div className="App">{hasToken}</div>;
}

export default App;
