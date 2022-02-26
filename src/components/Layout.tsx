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
			<header className='flex justify-end items-center h-12 bg-sky-700'>
				<nav className='flex space-x-2 m-2'>
					{data.site.siteMetadata.menuLinks.map(
						(link: {link: string; name: string}, idx: number) => (
							<Link to={link.link} key={idx} className=''>
								{link.name}
							</Link>
						)
					)}
				</nav>
			</header>
			<main className='h-[calc(100%-3rem)]'>
				<div className='content'>{props.children}</div>
			</main>
		</>
	);
};
export default Layout;
