import React from 'react';
import * as d3 from 'd3';
import {clamp} from 'lodash';

const HeatMap = () => {
	React.useEffect(createMap, []);

	return (
		<>
			<div className='title-wrapper'>
				<h1 id='title' className='heat-map'></h1>
			</div>
			<div className='heat-map container'>
				<div id='tooltip' className='heat-map' />
				<div id='legend' className='heat-map' />
			</div>
			<p id='description'></p>
		</>
	);
};
export default HeatMap;

function createMap() {
	let preferedWidth = document.documentElement.clientWidth - 40;
	let width = clamp(preferedWidth, 800, 1024);
	let height = 0.6 * window.innerHeight;
	let padding = 60;

	const svg = d3.select('.container').append('svg').attr('width', width).attr('height', height);

	d3.json(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
	).then((data: any) => {
		//build chart here
	});
}
