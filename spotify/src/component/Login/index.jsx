import React from 'react';
import spotifyLogo from '../../images/spotify-logo.png';
import {Button} from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './Login.css';
const index = () => {
	return (
		<div className="login">
			<img className="sp-logo" src={spotifyLogo} alt="logo" />
			<h2>
				Welcome to<h1>Spotify</h1>
			</h2>
			<Button>Login</Button>
			<PlayCircleFilledIcon />
		</div>
	);
};

export default index;
