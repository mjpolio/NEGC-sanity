import React, { useState } from 'react';
import { library } from '../../../data';

const Library = () => {
	const [toggleButton, setToggleButton] = useState(false);

	window.onscroll = function () {
		if (window.pageYOffset > 700) setToggleButton(true);
		else setToggleButton(false);
	};

	return (
		<div className='library'>
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
				Library
				<div className='underline'></div>
			</h2>
			<h3 className='heading heading-tertiary text-secondary'>
				Please contact the Librarian at the meeting to borrow books from the
				Library.
			</h3>
			<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Title</th>
						<th>Author</th>
						<th>Year</th>
						<th>Publisher</th>
					</tr>
				</thead>
				<tbody>
					{library.map((book, i) => (
						<tr key={i}>
							<td>{book.category}</td>
							<td>{book.title}</td>
							<td>{book.author}</td>
							<td>{book.year}</td>
							<td>{book.publisher}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Library;
