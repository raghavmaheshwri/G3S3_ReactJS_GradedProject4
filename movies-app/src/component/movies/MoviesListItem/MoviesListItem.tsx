import { useState } from 'react'
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IMovies from '../../../models/IMovies'
import '../../../css/MovieList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { AddFav, RemoveFromFav } from '../../../service/Fav'
import ToastSection from '../../common/toast/ToastSection'

type Props = {
  movie: IMovies,
  movietype: string
}

const MoviesListItem = ({ movie, movietype }: Props) => {

  const [toastSuccess, SettoastSuccess] = useState(false);
  const [toastError, SettoastError] = useState(false);

 

  const addInfav =  async () => {
    const moviesadd = await AddFav(movie as IMovies);
    if (moviesadd) {
      SettoastError(false)
      SettoastSuccess(true);
      setTimeout(() =>  SettoastSuccess(false), 5000);
    } else {
      SettoastSuccess(false);
      SettoastError(true)
      setTimeout(() => { SettoastError(false) }, 5000);
    }

  }


  return (
    <>
   <Card className="w-100 position-relative cardEffect px-2 py-2">
      <Link className='cardStyle'
        to={`/${movietype}/${movie.id}`}
        >
        <Card.Img variant="top" src={`img/${movie.poster}`} alt={movie.title} height="300" className='movieImageTop'></Card.Img>
        <Card.Body>
          <Card.Title>
            <div>
              <div className='movieTitle'>{movie.title}</div>
            </div>
          </Card.Title>
        </Card.Body>
      </Link>
        {movietype !== "favourite" && 
          <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip id={`tooltip-left`}>
              Add to<strong>Favourite</strong>.
            </Tooltip>
          }
        >
        <div className='AddToFavIcon' onClick={addInfav} id="addFavBtn">
          <FontAwesomeIcon icon={faHeart} size={'2x'} />
        </div>
          </OverlayTrigger>
          
      }
      {
        movietype === "favourite" &&
        <Button variant='primary' onClick={() => RemoveFromFav(movie.id)}>Remove</Button>
        }
      {
      toastSuccess === true && 
          <ToastSection message={`${movie.title} Added Succesfully to Favourite`} type={`Success`} />
      }
      {
          toastError === true && <ToastSection message={`${movie.title} Already Added in Favourit or Somthing Error`} type={`Error`} />
      }
        
    </Card>
  </>
  )

}




export default MoviesListItem