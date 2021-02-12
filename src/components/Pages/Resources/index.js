import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiSpade } from 'react-icons/gi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { resources } from '../../../data';

import './style.scss';

const Resources = () => {
	const [toggleButton, setToggleButton] = useState(false);

	window.onscroll = function () {
		if (window.pageYOffset > 700) setToggleButton(true);
		else setToggleButton(false);
	};

	return (
		<div className='resources'>
			{toggleButton && (
				<div className='text-right btn-up'>
					<button
						type='button'
						className='btn'
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						Go up
					</button>
				</div>
			)}
			<h2 className='heading heading-primary'>
				Horticultural Resources
				<div className='underline'></div>
			</h2>
			<ul className='resources-list'>
				<li className='resources-list-item'>
					<GiSpade className='resources-list-icon' />
					<Link
						className='resources-list-link'
						to={{
							pathname:
								'https://ag.umass.edu/services/soil-plant-nutrient-testing-laboratory',
						}}
						target='_blank'
					>
						Soil Testing
					</Link>
				</li>
				<li className='resources-list-item'>
					<IoIosHelpCircleOutline className='resources-list-icon' />
					<Link
						className='resources-list-link'
						to={{
							pathname: 'http://massmastergardeners.org/what-i-do/',
						}}
						target='_blank'
					>
						Horticulture Helpline
					</Link>
				</li>
				<li className='resources-list-item'>
					<AiOutlinePhone className='resources-list-icon' />
					<div className='resources-list-link'>617-933-4929</div>
				</li>
				<li className='resources-list-item'>
					<HiOutlineMail className='resources-list-icon' />
					<a
						className='resources-list-link'
						href='mailto:email hort_line@masshort.org'
					>
						email hort_line@masshort.org
					</a>
				</li>
			</ul>
			{resources.map(
				(letter, i) =>
					letter.resources.length !== 0 && (
						<a
							key={i}
							className='resources-letter-link'
							href={`#${letter.letter}`}
						>
							{letter.letter}
						</a>
					)
			)}
			{resources.map(
				(letter, i) =>
					letter.resources.length !== 0 && (
						<section
							key={i}
							className='resources-letter-section'
							id={letter.letter}
						>
							<h3 className='heading heading-primary'>{letter.letter}</h3>
							{letter.resources.map((link, index) => (
								<React.Fragment key={index}>
									{link.type &&
										(!letter.resources[index - 1] ||
											letter.resources[index - 1].type !== link.type) && (
											<p className='heading heading-tertiary text-left'>
												{link.type}:
											</p>
										)}
									<div className='resources-letter-item'>
										<Link
											to={{ pathname: `${link.link}` }}
											className='link'
											target='_blank'
										>
											{link.name}
										</Link>
										{link.extra && (
											<p className='resources-letter-item-extra'>
												{link.extra}
											</p>
										)}
									</div>
								</React.Fragment>
							))}
						</section>
					)
			)}
		</div>
	);
};

export default Resources;
