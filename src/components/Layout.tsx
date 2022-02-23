import {graphql, Link, useStaticQuery} from 'gatsby';
import * as React from 'react';
import '../styles/layout.scss';

const Layout = (props: {children: React.ReactNode}) => {
	const data = useStaticQuery(graphql`
		query SiteMetaData {
			site {
				siteMetadata {
					title
					menuLinks {
						name
						link
					}
				}
			}
		}
	`);

	return (
		<>
			<header>
				{data.site.siteMetadata.menuLinks.map((link: {link: string; name: string}, idx: number) => (
					<Link to={link.link} key={idx}>
						{link.name}
					</Link>
				))}
			</header>
			<main>{props.children}</main>
		</>
	);
};
export default Layout;
