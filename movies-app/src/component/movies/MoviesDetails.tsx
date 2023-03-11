import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import IMovies from '../../models/IMovies';
import { getMovieById } from '../../service/Movies';
import ErrorSection from '../common/errorSection/ErrorSection';
import Loader from '../common/loader/Loader';
import MoviesDetailsItem from './MoviesDetailsItem/MoviesDetailsItem';

const MoviesDetails = () => {

    const [movie, setMovie] = useState<IMovies>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | Error>(null);

    type Params = {
        movietype: string,
        id: string
    }

    const { movietype, id } = useParams<Params>();

    useEffect(
        () => {
            const helper = async () => {
                setLoading(true);
                try {
                    const movie = await getMovieById(movietype as string, id as string);
                    setMovie(movie);
                } catch (error) {
                    setError(error as Error);
                } finally {
                    setLoading(false);
                }
            }

            helper();
        }, [movietype, id] // Run useEffect when moviename change 
    );

    return (
        <div>
            {
                loading && (
                    <Loader></Loader>
                )
            }
            {
                !loading && error && (
                    <ErrorSection message={error.message}></ErrorSection>
                )
            }

            {!loading && !error && (
                <MoviesDetailsItem movie={movie} key={movie?.id}></MoviesDetailsItem>
            )
            }
        </div>

    )
}

export default MoviesDetails