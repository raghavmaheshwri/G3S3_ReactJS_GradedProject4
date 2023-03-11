import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import IMovies from '../../models/IMovies';
import { getMovies } from '../../service/Movies';
import ErrorSection from '../common/errorSection/ErrorSection';
import Loader from '../common/loader/Loader';
import MoviesListItem from './MoviesListItem/MoviesListItem';
import '../../css/MovieList.css';
import NoDataFound from '../common/errorSection/NoDataFound';

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovies[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | Error>(null);
    const [searchInput, setSearchInput] = useState<string>("");
    const [searching, setSearchingTrue] = useState(false);

    type Params = {
        movietype: string
    }

    const { movietype } = useParams<Params>();

    const movietypename = movietype?.replace(/-/g, " ");

    const inputSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        var searchValue = event.target.value;
        setSearchingTrue(true)
        setSearchInput(searchValue) 
    }

    useEffect(
        () => {
            const helper = async () => {
                setLoading(true);
                setError(null);
                try {
                    const movies = await getMovies(movietype as string);
                    if (searching) {
                        const SearchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
                        setMovies(SearchedMovies);
                    } else {
                        setMovies(movies);
                    }
                } catch (error) {
                    setError(error as Error);
                } finally {
                    setSearchingTrue(false);
                    setLoading(false);
                }
            }

            helper();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [movietype, searchInput] // Run useEffect when moviename change 
    );

    return (
        
        <div>
            { !error && (
            <><Row className='movieTypeHeader align-items-center'>
                    <Col><h1>{movietypename}</h1></Col>
                    <Col md="4">
                        <Form.Control
                            type="search"
                            placeholder={`Search Movie in ${movietypename}`}
                            className="me-3"
                            aria-label="Search"
                            onChange={inputSearch} />

                    </Col>
                </Row><hr></hr></>
            )
            }
            {
                loading && (
                    <Loader></Loader>
                )
            }
            {
                !loading && error && (
                    <ErrorSection message={error.message} buttonShow="home"></ErrorSection>
                )
            }
            {!loading && !error && (
                <>
                    
                    <Row xs={2} lg={6}>
                        {movies.map(
                            movie => (
                                <Col
                                    key={movie.id}
                                    className="d-flex my-3"
                                >
                                    <MoviesListItem
                                        movie={movie} movietype={movietype as string} />
                                </Col>
                            )
                        )}
                    </Row>
                </>
            )
            }
            {
                movies.length === 0 && !loading && !error &&
                <NoDataFound message={`You haven't add any data to your Favourite List`}></NoDataFound>
            }
        </div>
    )
}

export default MoviesList;
