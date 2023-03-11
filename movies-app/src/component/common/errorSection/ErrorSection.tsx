import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {
  message: string,
  buttonShow: "reload" | "home"
}

const ErrorSection = ({ message,buttonShow } : Props) => {
  return (
    <Alert variant="warning" className='text-center'>
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <div className='my-3'>
        <FontAwesomeIcon icon={faFaceFrown} size='4x' />
    </div>
    <p>
      {message}
      </p>
      { buttonShow==="home" && 
        <div>
          <Link to={`/`} className='btn btn-primary'>Go To Home Page</Link>
        </div>
      }
      { buttonShow === "reload" && 
        <Button variant={`primary`} onClick={()=> window.location.reload()}>Reload Page</Button>
      }
  </Alert>
  )
}

ErrorSection.defaultProps = {
  message: "Page Not Found",
  buttonShow:"home"
}


export default ErrorSection;