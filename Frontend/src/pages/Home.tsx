import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/Home.css';

const fetchSubRedditData = async () => {
	const {
		data: { data },
	} = await axios.get('https://www.reddit.com/r/odisha/about.json');
	return data;
};

function Home() {
	const [subscriberCnt, setSubsCnt] = useState(0);
	const [activeUserCnt, setActiveUserCnt] = useState(0);

	useEffect(() => {
		fetchSubRedditData().then(({ subscribers, active_user_count }) => {
			setSubsCnt(subscribers);
			setActiveUserCnt(active_user_count);
		});
	});

	return (
		<section className="home">
			{JSON.stringify(useLocation())}
			<h3>subscriberCnt: {subscriberCnt}</h3>
			<h3>activeUserCnt: {activeUserCnt}</h3>
		</section>
	);
}

export default Home;
