import axios from 'axios';
import IMovies from '../models/IMovies';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const getMovies = async (movieType : string ) => {
    const response = await axios.get(`${apiBaseUrl}/${movieType}`);
    return response.data as IMovies[];
}

const getMovieById = async (movieType:string, id : string) => {
    const response = await axios.get(`${apiBaseUrl}/${movieType}/${id}`);
    return response.data as IMovies;
}


export {
    getMovies,
    getMovieById
}