import { useEffect, useState } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer';
import { Search } from './components/Search';

function App() {
	const [movies, setMovies] = useState();
	const [searchTerm, setSearchTerm] = useState('');
	const movies_url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
	const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`;

	useEffect(() => {
		getMovies(movies_url);
	}, []);

	const getMovies = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.results);
		setMovies(data.results); // `results` from the tmdb docs
	};

	return (
		<div className='App'>
			<header>
				<Search setSearchTerm={setSearchTerm} />
			</header>
			<MovieContainer movies={movies} />
		</div>
	);
}

export default App;
