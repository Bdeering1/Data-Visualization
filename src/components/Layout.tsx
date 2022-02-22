import * as React from 'react';
import '../styles/layout.scss';

const Layout = (props: { children: React.ReactNode }) => {
	return <main>{props.children}</main>;
};
export default Layout;
