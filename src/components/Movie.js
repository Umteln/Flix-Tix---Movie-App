import React from 'react';
import { getClassByRate, IMG_PATH } from '../utils/fetchData.js'

const Movie = ({ movie }) => {
	const { title, poster_path, vote_average, overview } = movie;

	return (
		<div className='movie'>
			<img
				src={IMG_PATH + poster_path}
				alt=''
			/>
			<div className='movie-info'>
				<h3>{title}</h3>
				<span className={getClassByRate(vote_average)}>{vote_average}</span>
			</div>
			<div className='overview'>
				<h3>Overview</h3>${overview}
			</div>
		</div>
	);
};

export default Movie;
