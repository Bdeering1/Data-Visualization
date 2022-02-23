module.exports = {
	siteMetadata: {
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
		],
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
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
