module.exports = {
	siteMetadata: {
		title: 'data-visualization'
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
				allExtensions: true
			}
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve('./src/components/Layout.tsx')
			}
		}
	]
};
