import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import menuData from '../../service/menuData'
import ErrorSection from '../common/errorSection/ErrorSection'
import Loader from '../common/loader/Loader'
import OptionCard from './OptionCard'

const HomeSection = () => {

  const imgArray = [
    "threater.jpg",
    "IMAGE_1643383666.jpg",
    "img_199441_riseofsouthcinema_bg.jpg",
    "Top-rated.jpg",
    "fav.jpg"
  ]

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);
  const [menu, setMenu] = useState<string[]>([]);

  useEffect(
    () => {
      const helper = async () => {
        setLoading(true);
        setError(null);
        try {
          const fetchMenu = await menuData();
          setMenu(fetchMenu);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      }

      helper();
    }, [] // Run useEffect when somthing  change 
  );

  return (

    <>

      {
        loading && (
          <>
           <Loader></Loader>
          </>
        )
      }
      {
        !loading && error && (
          <>
            <ErrorSection message={`${error.message}`} buttonShow="reload"></ErrorSection>
          </>
        )
      }
      {menu.length !== 0 && !loading && !error &&
        <>
          <div>
            <Container style={{ paddingTop: "8%", paddingBottom: "8%" }}>
              <Row className='my-3 text-center'>
                <h1>Welcome to Movies on Tip</h1>
                <p>Choose Below Options </p>
              </Row>
              <Row xs={2} md={5}>
                {menu.map((item, idx) => (
                  <Col>
                    <OptionCard ImgUrl={`${imgArray[idx]}`}
                      RedirectUrl={`/${item}`}
                      OptionName={item.replace(/-/g, " ")}></OptionCard>
                  </Col>))}
              </Row>
            </Container>
          </div>

        </>
      }
    </>
  )
}

export default HomeSection