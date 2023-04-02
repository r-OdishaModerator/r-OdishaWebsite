import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Meetups from './pages/Meetups';
import PageNotFound from './pages/PageNotFound';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
	const router = createBrowserRouter([
		{
			path: '',
			element: <DefaultLayout />,
			children: [
				{
          path: '',
          element: <Home />,
				},
				{
					path: 'meetups',
					element: <Meetups />,
					// loader: teamLoader,
				},
			],
		},
	]);

	return (
		// <Router>
		// 	<Header />
		// 	<div className="h-screen bg-slate-100 pt-16">
		// 		<Routes>
		//       <Route path="/" element={<Home />} />
		// 			<Route path="/meetups" element={<Meetups />} />
		// 			<Route path="*" element={<PageNotFound />} />
		// 		</Routes>
		// 	</div>
		// 	<Footer />
		// </Router>
		<RouterProvider router={router} />
	);
}

export default App;
