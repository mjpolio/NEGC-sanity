import React from 'react';
import { GiTwirlyFlower, GiSpotedFlower } from 'react-icons/gi';

import './style.scss';

const Home = () => {
	return (
		<div className='home'>
			<h2 className='heading heading-primary'>
				Norwood Evening Gardening Club
				<div className='underline'></div>
			</h2>
			<div>
				<p>
					The Norwood Evening Garden Club brings together enthusiastic gardeners
					from Norwood, Walpole, Westwood and surrounding towns for the goals
					of:
				</p>
				<div className="home-list-container">
					<ul className='home-list'>
						<li>
							<GiSpotedFlower className='list-icon' />
							Learning more about horticulture and floral design
						</li>
						<li>
							<GiSpotedFlower className='list-icon' />
							Sharing knowledge and expertise with each other and with the public
						</li>
						<li>
							<GiSpotedFlower className='list-icon' />
							Making our communities more beautiful through civic projects
						</li>
					</ul>
				</div>
			</div>
			<p>
				The public is cordially invited to attend any of our meetings held at
				the Carriage House at the First Baptist Church, 71 Bond Street in
				Norwood (unless noted as members-only) featuring an outstanding array of
				regional experts on topics in horticulture, floral design and
				environmental issues. Our meetings are generally held on the last
				Tuesday of the month from September through May.
			</p>
			<p>
				For further information, contact{' '}
				<a
					className='link'
					href='mailto:membership@norwoodeveninggardenclub.com?subject=Gardening Club'
				>
					membership@norwoodeveninggardenclub.com
				</a>
			</p>

			<div className='home-pledge'>
				<GiTwirlyFlower className='home-pledge-icon' />
				<div className='home-pledge-outer octagon'>
					<div className='home-pledge-inner octagon'>
						<div className='home-pledge-text'>
							<h3 className='heading heading-secondary text-secondary'>
								Conservation Pledge
							</h3>
							<p>
								I give my pledge as an American to save and faithfully to defend
								from waste, the natural resources of my country - its air, soils
								and minerals, its forests, waters and wildlife.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
