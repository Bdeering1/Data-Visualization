import React from 'react';
import * as d3 from 'd3';

const BarChart = () => {
	React.useEffect(createChart, []);

	return (
		<>
			<div className='title-wrapper'>
				<h1 id='title' className='bar-chart'>
					United States GDP
				</h1>
			</div>
			<div className='bar-chart container'>
				<div id='tooltip' className='bar-chart'></div>
			</div>
		</>
	);
};
export default BarChart;

function createChart() {
	let preferedWidth = document.documentElement.clientWidth - 40;
	let width = clamp(preferedWidth, 800, 1024);
	let height = 0.6 * window.innerHeight;
	let padding = 60;

	let tooltip = d3.select('#tooltip').attr('id', 'tooltip').style('opacity', 0);

	let overlay = d3.select('.container').append('div').attr('class', 'overlay').style('opacity', 0);

	d3.json(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'
	).then((data) => {
		let dataset = data.data;

		const svg = d3.select('.container').append('svg').attr('width', width).attr('height', height);

		const xScale = d3
			.scaleTime()
			.domain([d3.min(dataset, (d) => new Date(d[0])), d3.max(dataset, (d) => new Date(d[0]))])
			.range([padding, width - padding]);
		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(dataset, (d) => d[1])])
			.range([height - padding, padding]);

		svg
			.selectAll('rect')
			.data(dataset)
			.enter()
			.append('rect')
			.attr('x', (d) => xScale(new Date(d[0])))
			.attr('y', (d) => yScale(d[1]))
			.attr('width', width / 275)
			.attr('height', (d) => height - padding - yScale(d[1]))
			.attr('data-date', (d) => d[0])
			.attr('data-gdp', (d) => d[1])
			.attr('index', (d, i) => i)
			.attr('fill', '#1C5491')
			.attr('class', 'bar')
			.on('mouseover', (e, d) => {
				overlay
					.transition()
					.duration(0)
					.style('height', height - padding - yScale(d[1]) + 'px')
					.style('width', width / 275 + 'px')
					.style('opacity', 0.9)
					.style('left', xScale(new Date(d[0])) + 'px')
					.style('top', yScale(d[1]) - 1 + 'px');
				tooltip.transition().duration(200).style('opacity', 0.9);
				tooltip
					.html(d[0])
					.attr('data-date', d[0])
					.style('left', xScale(new Date(d[0])) + 'px')
					.style('top', height - padding * 3 + 'px')
					.style('transform', 'translateX(20px)');
			})
			.on('mouseout', function () {
				tooltip.transition().duration(200).style('opacity', 0);
				overlay.transition().duration(200).style('opacity', 0);
			});

		const xAxis = d3.axisBottom(xScale);
		svg
			.append('g')
			.attr('transform', `translate(0, ${height - padding})`)
			.attr('id', 'x-axis')
			.call(xAxis);

		const yAxis = d3.axisLeft(yScale);
		svg.append('g').attr('transform', `translate(${padding}, 0)`).attr('id', 'y-axis').call(yAxis);
	});
}

function clamp(n, min, max) {
	if (n > max) {
		return max;
	} else if (n < min) {
		return min;
	} else {
		return n;
	}
}
