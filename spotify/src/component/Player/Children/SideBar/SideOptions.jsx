import React from 'react';
import './SideOptions.css';
const SideOptions = ({option, Icon}) => {
	return (
		<div className="sidebarOption">
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? <h4>{option}</h4> : <p>{option}</p>}
		</div>
	);
};

export default SideOptions;
