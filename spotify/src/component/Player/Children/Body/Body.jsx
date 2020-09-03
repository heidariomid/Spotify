import React, {useState, useEffect} from 'react';
import './Body.css';
import SongRow from './SongRow';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Body = ({playlist, spotify}) => {
	const [data, setData] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [item, setItem] = useState(null);

	useEffect(() => {
		const handler = async () => {
			const {userWeeklyPlaylist} = await playlist;
			const name = userWeeklyPlaylist?.name;
			const img = userWeeklyPlaylist?.images[0].url;
			const result = {...userWeeklyPlaylist, name, img};
			setData(result);
		};
		handler();
	}, []);
	const playPlaylist = (id) => {
		console.log(id);
		spotify
			.play({
				context_uri: `spotify:playlist:2OCAj1EFf2bEvWAEqpxekQ`,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((res) => {
					setItem(res.item);
					setIsPlaying(true);
				});
			});
	};

	const playSong = async (id) => {
		console.log(id);
		await spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((res) => {
					setItem(res.item);
					setIsPlaying(true);
				});
			});
	};
	const songs = data?.tracks?.items.map((item) => <SongRow playSong={playSong} track={item.track} />);

	return (
		<div className="body">
			<Header playlist={playlist} />
			<div className="body__info">
				<img src={data?.img} alt="op" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{data?.name}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist} />
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{songs}
			</div>
		</div>
	);
};

export default Body;
