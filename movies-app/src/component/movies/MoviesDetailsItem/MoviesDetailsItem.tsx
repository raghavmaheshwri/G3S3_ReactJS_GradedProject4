import React from 'react'
import { Badge, Col, Container, Image, Row } from 'react-bootstrap'
import IMovies from '../../../models/IMovies'
import '../../../css/moviesDetail.css'
import { useParams } from 'react-router-dom'


type Props = {
    movie?: IMovies
}


const MoviesDetailsItem = ({ movie }: Props) => {

  type Params = {
    movietype: string
  }
  
  const { movietype } = useParams<Params>();

  return (
    <Container>
      <Row>
        <Col md={4} className="my-3">
          <div>
            <Image src={`/img/${movie?.poster}`} fluid rounded className='fullwidthimg'></Image>
         </div>
        </Col>
        <Col className="my-3">
          <div>
            <h2>{movie?.title} {movietype === "favourite" && <Badge bg="info" >Favourite</Badge>}</h2>
            <hr />
            <p><b>Storyline </b>: {movie?.storyline}</p>
            <p><b>Release Date</b> : {movie?.releaseDate } </p>
            <p><b>Year </b> : {movie?.year}</p>
            <p><b>Duration</b> : { movie?.duration}</p>
            <p><b>Gerners</b> : {movie?.genres.map((genre, key) => (
              <span key={key}>{genre}, </span>
            ))}</p>
            <p><b>Actors</b> : {movie?.actors.map((actor, key) => (
              <span key={key}>{actor}, </span>
            ))}</p>
            <p><b>Content Rating </b>: {movie?.contentRating}</p>
            <p><b>Average Rating </b> : {movie?.averageRating}</p>
            <p><b>IMDB Rating </b> : {movie?.imdbRating}</p>
            <p><b>User Ratings</b> : {movie?.ratings.map((rating, key) => (
              <>{rating },&nbsp;</> 
            ))}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviesDetailsItem