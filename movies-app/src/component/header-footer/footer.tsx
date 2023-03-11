import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../css/navigation.css'

const SetFooter = () => {
  return (
      <Container fluid className='BgFooterHeader py-2 SectionFooter'>
          <Container>
              <Row>
                  <div>
                  <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Movies on The Tip
                  </div>
              </Row>
          </Container>
    </Container>
  )
}

export default SetFooter