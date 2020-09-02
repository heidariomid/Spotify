import React from 'react';
import spotifyLogo from '../../images/spotify-logo.png';
import {accessUrl} from '../../util/spotify';
import './Login.css';
const index = () => {
	return (
		<div className="login">
			<img src={spotifyLogo} alt="logo" />
			<h2>
				Welcome to<h1>Spotify</h1>
			</h2>
			<a href={accessUrl}>Login</a>
		</div>
	);
};

export default index;
