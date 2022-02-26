import React from 'react';

const HeatMap = () => {
	React.useEffect(createMap, []);

	return (
		<div className='wrapper'>
			<h1 className='heat-map title'></h1>
			<div className='heat-map container'></div>
		</div>
	);
};
export default HeatMap;

function createMap() {
	//d3 logic here
}
