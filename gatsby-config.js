module.exports = {
	pathPrefix: '',
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'data-visualization',
		menuLinks: [
			{
				name: 'home',
				link: '/',
			},
			{
				name: 'bar chart',
				link: '/bar-chart',
			},
			{
				name: 'scatter plot',
				link: '/scatter-plot',
			},
			{
				name: 'heat map',
				link: '/heat-map',
			},
		],
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
			},
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				jsxPragma: `jsx`,
				allExtensions: true,
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve('./src/components/Layout.tsx'),
			},
		},
	],
};
