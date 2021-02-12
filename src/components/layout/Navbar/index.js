import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<ul>
					<li className='navbar-item'>
						<Link to='/' className='navbar-links'>
							Home
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/about' className='navbar-links'>
							About
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/news' className='navbar-links'>
							News
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/membership' className='navbar-links'>
							Membership
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/executives' className='navbar-links'>
							Board of Directors
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/committees' className='navbar-links'>
							Committees
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/calendar' className='navbar-links'>
							Calendar
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/newsletters' className='navbar-links'>
							Newsletters
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/resources' className='navbar-links'>
							Resources
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/courses' className='navbar-links'>
							Courses
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/horticulture' className='navbar-links'>
							Horticulture Notes
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/awards' className='navbar-links'>
							Awards
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/library' className='navbar-links'>
							Library
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/photos' className='navbar-links'>
							Photo Gallery
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/store' className='navbar-links'>
							Our Store
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/contact' className='navbar-links'>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
