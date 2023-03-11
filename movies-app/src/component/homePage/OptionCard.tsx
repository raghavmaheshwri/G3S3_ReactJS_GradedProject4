import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../css/homePage.css'
type Props = {
   ImgUrl : String,
    RedirectUrl: String,
    OptionName : String
}

const OptionCard = ({ImgUrl, RedirectUrl, OptionName }:Props) => (
  <Card className='text-center optionCard'>
    <Link to={`${RedirectUrl}`} className="optionCard">
      <Card.Img variant="top" src={`img/${ImgUrl}`} height={180} />
      <Card.Body>
        <Card.Title style={{ textTransform:"capitalize" }}>{OptionName}</Card.Title>
      </Card.Body>
      </Link>
    </Card>
)

export default OptionCard