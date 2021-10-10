import React from 'react';
import * as d3 from 'd3';
import '../styles/scatter-plot.scss';

const ScatterPlot = () => {
	React.useEffect(createPlot, []);

	return (
		<main>
			<div className='wrapper'>
				<h1 id='scatter-plot title'>Doping in Professional Cycling</h1>
				<h2 id='subtitle'>35 Fastest times up Alpe d'Huez</h2>
				<div className='scatter-plot container'>
					<div id='tooltip'></div>
				</div>
			</div>
		</main>
	);
};
export default ScatterPlot;

function createPlot() {
	let preferedWidth = document.documentElement.clientWidth - 40;
	let width = clamp(preferedWidth, 800, 1024); /* body has 40px of left/right padding */
	let height = 0.6 * window.innerHeight;
	let padding = 60;

	const svg = d3.select('.container').append('svg').attr('width', width).attr('height', height);

	d3.json(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
	).then((data) => {
		const years = data.map((d) => d.Year);
		const timeMins = data.map((d) => {
			let parsedTime = d.Time.split(':');
			return new Date(0, 0, 0, 0, parsedTime[0], parsedTime[1]);
		});
		const doping = data.map((d) => (d.Doping !== '' ? true : false));

		const xScale = d3
			.scaleLinear()
			.domain([d3.min(years) - 1, d3.max(years) + 1])
			.range([padding, width - padding]);
		const yScale = d3
			.scaleTime()
			.domain(d3.extent(timeMins))
			.range([padding, height - padding]);

		const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
		const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

		svg
			.append('g')
			.attr('transform', `translate(0, ${height - padding})`)
			.attr('id', 'x-axis')
			.call(xAxis);
		svg.append('g').attr('transform', `translate(${padding}, 0)`).attr('id', 'y-axis').call(yAxis);

		let labels = [
			{ text: 'Doping allegations', color: '#D85A5E' },
			{ text: 'No doping allegations', color: '#1C5491' }
		];
		const legend = svg
			.append('g')
			.attr('id', 'legend')
			.selectAll('g')
			.data(labels)
			.enter()
			.append('g')
			.attr('class', 'legend-label')
			.attr('transform', (d, i) => `translate(0,${height / 2 - i * 20})`);

		legend
			.append('text')
			.text((d) => d.text)
			.attr('x', width - 50)
			.attr('y', 10)
			.style('text-anchor', 'end');
		legend
			.append('rect')
			.attr('width', 10)
			.attr('height', 10)
			.attr('x', width - 40)
			.attr('fill', (d) => d.color);

		svg
			.selectAll('circle')
			.data(timeMins)
			.enter()
			.append('circle')
			.attr('r', 6)
			.attr('cx', (d, i) => xScale(years[i]))
			.attr('cy', (d) => yScale(d))
			.attr('class', 'dot')
			.attr('data-xvalue', (d, i) => years[i])
			.attr('data-yvalue', (d) => d)
			.attr('index', (d, i) => i)
			.attr('fill', (d, i) => (doping[i] ? '#D85A5E' : '#1C5491'))
			.on('mouseover', function (e, d) {
				mouseOver.bind(this)(e, d);
			})
			.on('mouseout', () => {
				d3.select('#tooltip').transition().duration(200).style('opacity', 0);
			});

		function mouseOver(e, d) {
			let idx = this.getAttribute('index');
			d3.select('#tooltip')
				.attr('data-year', years[idx])
				.html(
					`${data[idx].Name} - ${data[idx].Time}<br/>
										${data[idx].Doping}`
				)
				.style('left', xScale(years[idx]) + 'px')
				.style('top', yScale(d) + 'px')
				.style('background', this.getAttribute('fill'))
				.transition()
				.duration(200)
				.style('opacity', 0.9);
		}
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