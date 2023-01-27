import React from 'react';
import Movie from './Movie';

const MovieContainer = ({ movies }) => {
	console.log(movies);
	return (
		<div className='main'>
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					movie={movie}
				/>
			))}
		</div>
	);
};

export default MovieContainer;
