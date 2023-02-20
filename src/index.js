import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Meetups from './pages/Meetups';
import PageNotFound from './pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<div className="h-screen bg-slate-100 pt-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/meetups" element={<Meetups />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	</React.StrictMode>
);
