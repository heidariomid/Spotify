import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';

import './Header.css';
const Header = ({playlist}) => {
	const [data, setdata] = useState(null);
	useEffect(() => {
		const handler = async () => {
			const {userData} = await playlist;

			setdata(userData);
		};
		handler();
	}, []);

	return (
		<div className="header">
			<div className="header__left">
				<SearchIcon />
				<input placeholder="Search for Artists, Songs, or Podcasts " type="text" />
			</div>
			<div className="header__right">
				<Avatar src={data?.images[0].url} alt="" />
				<h4>{data?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
