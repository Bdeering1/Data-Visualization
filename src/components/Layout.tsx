import {graphql, Link, useStaticQuery} from 'gatsby';
import * as React from 'react';

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
			<header className='h-12 bg-sky-700'>
				<nav className='flex justify-end space-x-1'>
					{data.site.siteMetadata.menuLinks.map(
						(link: {link: string; name: string}, idx: number) => (
							<Link to={link.link} key={idx} className=''>
								{link.name}
							</Link>
						)
					)}
				</nav>
			</header>
			<main>
				<div className='content flex flex-col justify-center items-center space-y-2 h-full'>
					{props.children}
				</div>
			</main>
		</>
	);
};
export default Layout;
