import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    message :string 
}

const NoDataFound = ({message} : Props) => {
  return (
      <div style={{ paddingTop: "8%", paddingBottom: "8%" }} className="text-center">
            <FontAwesomeIcon icon={faExclamationCircle} size="3x"></FontAwesomeIcon>
            
          <h3>No Data Found</h3>
          <p>{ message}</p>
      </div>
  )
}

export default NoDataFound