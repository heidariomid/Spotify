import React from 'react';
import {Body, Footer, SideBar} from './Children';
import './Player.css';
const Player = ({playlist, spotify}) => {
	return (
		<div className="player">
			<div className="player_body">
				<SideBar playlist={playlist} />
				<Body playlist={playlist} spotify={spotify} />
			</div>
			<div className="player_footer">
				<Footer />
			</div>
		</div>
	);
};

export default Player;
