import React from 'react'
import Navbar from './Navbar.js'
import Main from './Main.js'
import Sidebar from './Sidebar.js'
import Footer from './Footer.js'
import Table from '../common/Table.js'
const Layout = () => {
	return (
		<>
			<Sidebar/>
			<div className="admin_body">
				<Navbar/>
				<div className="container">
					<Main/>
				</div>
				<Footer/>
			</div>
		</>
	)
}

export default Layout;