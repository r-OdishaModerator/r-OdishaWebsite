import axios from 'axios';
import { useEffect, useState } from 'react';
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
	}, []);

	return (
		<section className="home">
			<h1 className="subreddit-name">
				r/<i className="fa-solid fa-dharmachakra"></i>DISHA
			</h1>
			<div className="actions-container">
				<h2>Connect with the community</h2>
				<div className="actions-btn-group">
					<button className="btn btn-discord" type='button'>
						<i className='fa-brands fa-discord discord-icon'></i>
						Discord
					</button>
					<button className="btn btn-reddit" type='button'>
						<i className='fa-brands fa-reddit-alien reddit-icon'></i>
						Reddit
					</button>
				</div>
			</div>

			<h4 className="subreddit-stats">
				{activeUserCnt}/{subscriberCnt} users currently active{' '}
				<a
					href="https://www.reddit.com/r/Odisha/"
					target="_blank"
					rel="noreferrer"
					className="subreddit-link"
				>
					@reddit
				</a>
			</h4>
		</section>
	);
}

export default Home;
