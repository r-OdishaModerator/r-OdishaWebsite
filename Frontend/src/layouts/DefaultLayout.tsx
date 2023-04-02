import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<div className="h-screen bg-slate-100">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default DefaultLayout;
