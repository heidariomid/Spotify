import React from 'react';
import spotifyLogo from '../../images/spotify-logo.png';
import './Login.css';
const index = () => {
	return (
		<div className="login">
			<img className="sp-logo" src={spotifyLogo} alt="logo" />
			<h2>
				Welcome to<h1>Spotify</h1>
			</h2>
			<button>Login</button>
		</div>
	);
};

export default index;
