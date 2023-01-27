import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';
export const api = axios.create({ baseURL: BASE_URL });

export const API_URL = `/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

//get Rating class color
export const getClassByRate = (vote) => {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
};
