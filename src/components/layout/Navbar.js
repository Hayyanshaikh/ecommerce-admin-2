import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/tb'
import Breadcrumb from '../common/Breadcrumb.js'
import Logo from '../../images/common/logo.svg'
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
			<div className="navbar_main">
				<Link to="/" className="logo">
					<img src={Logo} alt="logo"/>
				</Link>
				<div className="navbar_icons">
					<Link className="navbar_icon">
						<Icons.TbLayoutGrid />
					</Link>
					<Link className="navbar_icon">
						<Icons.TbChartLine />
					</Link>
					<Link className="navbar_icon">
						<Icons.TbMessage2 />
					</Link>
					<Link className="navbar_icon">
						<Icons.TbSunHigh />
					</Link>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Navbar