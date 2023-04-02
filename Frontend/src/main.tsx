import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<Router>
// 			<Header />
// 			<div className="h-screen bg-slate-100 pt-16">
// 				<Routes>
// 					<Route path="/" element={<Home />} />
// 					<Route path="/meetups" element={<Meetups />} />
// 					<Route path="*" element={<PageNotFound />} />
// 				</Routes>
// 			</div>
// 			<Footer />
// 		</Router>
// 	</React.StrictMode>
// );
