import axios from 'axios';
import IMovies from '../models/IMovies';
import { getMovieById } from './Movies';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;


const AddFav = async (movie: IMovies) => {
    var taskStats = true;
    try {
        await axios.post(`${apiBaseUrl}/favourite`, movie)
        return taskStats = true;
    } catch (AxiosError) {
        return taskStats = false;
    }
}

const RemoveFromFav = async (movieId: number) => {
    var el = null;
    await axios.delete(`${apiBaseUrl}/favourite/${movieId}`).then(() =>
        el = true
    );
    window.location.reload();
}

const checkMovieInFav = async (movieId: string) => {
    const response = await getMovieById("", movieId);
    return response.id;
}

export { AddFav, RemoveFromFav,checkMovieInFav}