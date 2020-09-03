import React, {useEffect, useState} from 'react';
import {getTokenFromResponse} from './util/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {Login, Player} from './component';
import './App.css';

function App() {
	const spotify = new SpotifyWebApi();
	const [token, setToken] = useState('BQBq-v_paumZzmb9AiRJ7C7zB1bNH-BQXLmnhfZTBtc32CMKKTK7FoaaTdm7tzlqA1S1DsHPkoMVqFJ8RPVu0M44GijTw5xIcsX99QvkX701IrZq1lGEcduXAC63RA8YMGddhmPUxPSORqXCeiO70jwbqAc');
	// useEffect(() => {
	// 	const hash = getTokenFromResponse();
	// 	window.location.hash = '';
	// 	const _token = hash.access_token;
	// 	const tokenHandler = async () => {
	// 		if (_token) {
	// 			console.log(_token);
	// 			setToken(_token);
	// 			spotify.setAccessToken(_token);
	// 			const data = await spotify.getMe();
	// 		} else {
	// 			setToken(null);
	// 		}
	// 	};
	// 	tokenHandler();
	// }, []);

	const userPlayListHandler = async () => {
		spotify.setAccessToken(token);
		const userPlaylist = await spotify.getUserPlaylists();
		const userData = await spotify.getMe();
		const userWeeklyPlaylist = await spotify.getPlaylist('2OCAj1EFf2bEvWAEqpxekQ');
		return {userPlaylist, userData, userWeeklyPlaylist};
	};

	const hasToken = !token ? <Login /> : <Player spotify={spotify} playlist={userPlayListHandler()} />;
	return <div className="App">{hasToken}</div>;
}

export default App;
