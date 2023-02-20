import { NavLink } from 'react-router-dom';

import './styles/Header.css';

function Header() {
	return (
		<section className="header">
			<div className="container">
				<div className="nav-headers">App Name</div>
				<div className="nav-links">
					<NavLink to="">Home</NavLink>
					<NavLink to="meetups">Meetups</NavLink>
				</div>
			</div>
		</section>
	);
}

export default Header;
