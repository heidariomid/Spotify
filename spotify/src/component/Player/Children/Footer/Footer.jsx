import React from 'react';
import './Footer.css';
import SP from '../../../../images/album.jpg';
import {Grid, Slider} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_left">
				<img className="footer__albumLogo" src={SP} alt={'x'} />
				<div className="footer__songInfo">
					<h4>Dokhtare Khub</h4>
					<p>XBand</p>
				</div>
			</div>
			<div className="footer_center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PauseCircleOutlineIcon className="footer__icon" />
				<PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider className="slider_volume" aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
