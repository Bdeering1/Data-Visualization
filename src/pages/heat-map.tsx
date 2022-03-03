import React from 'react';
import * as d3 from 'd3';

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
	d3.json(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
	).then((data: any) => {
		//build chart here
	});
}
