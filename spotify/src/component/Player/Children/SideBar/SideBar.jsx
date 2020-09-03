import React, {useEffect, useState} from 'react';
import SpotifySide from '../../../../images/spotify-side.jpg';
import './SideBar.css';
import SideOptions from './SideOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const SideBar = ({playlist}) => {
	const [data, setdata] = useState([]);
	useEffect(() => {
		const handler = async () => {
			const {userPlaylist} = await playlist;
			setdata(userPlaylist);
		};
		handler();
	}, []);
	const playlistName = data?.items?.map(({name}) => <SideOptions option={name} />);
	return (
		<div className="sidebar">
			<img className="sidebar__logo" src={SpotifySide} alt="sideBar-logo" />
			<SideOptions Icon={HomeIcon} option="Home" />
			<SideOptions Icon={SearchIcon} option="Search" />
			<SideOptions Icon={LibraryMusicIcon} option="Your Libarary" />
			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />
			{playlistName}
		</div>
	);
};

export default SideBar;
