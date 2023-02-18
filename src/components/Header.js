import { NavLink } from 'react-router-dom';

import './styles/Header.css';

function Header() {
	return (
		<section className="header">
			<NavLink to="">Home</NavLink>
			<NavLink to="meetups">Meetups</NavLink>
		</section>
	);
}

export default Header;
