module.exports = {
	siteMetadata: {
		title: `REM SITE`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
			  plugins: [
				{
				  resolve: `gatsby-remark-images`,
				  options: {
					maxWidth: 590,
				  },
				},
				{
				  resolve: `gatsby-remark-responsive-iframe`,
				  options: {
					wrapperStyle: `margin-bottom: 1.0725rem`,
				  },
				},
				'gatsby-remark-prismjs',
				'gatsby-remark-copy-linked-files',
				'gatsby-remark-smartypants',
			  ],
			},
		  },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	]
};
