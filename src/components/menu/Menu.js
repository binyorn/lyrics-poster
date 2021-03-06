import React from 'react';
import PropTypes from 'prop-types';

import DownloadContainer from './pages/DownloadContainer';
import ImageContainer from './pages/ImageContainer';
import LandingPage from './pages/LandingPage';
import LyricsContainer from './pages/LyricsContainer';
import StylingContainer from './pages/StylingContainer';

import logo from '../../images/logo.svg';


export default function Menu(props) {
	const pages = [
		<LandingPage navigate={props.navigate} />,
		<ImageContainer navigate={props.navigate} />,
		<LyricsContainer navigate={props.navigate} />,
		<StylingContainer navigate={props.navigate} />,
		<DownloadContainer navigate={props.navigate} />
	];

	return (
		<div className="menu-container">
			<div className="menu-page">
				<h1>
					<img src={logo} alt="Lyrics Poster" className="logo" />
				</h1>
				{pages[props.navPage]}
			</div>
			<div
				className="nav-indicator"
				style={{ width: `${props.navPage * (100 / (pages.length - 1))}%` }}
			/>
		</div>
	);
}


Menu.propTypes = {
	// Redux attributes
	navPage: PropTypes.number.isRequired,

	// other props
	navigate: PropTypes.func.isRequired
};
