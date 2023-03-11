import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import '../../css/navigation.css'
import menuData from '../../service/menuData';

const NavigationMenu = () => {
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
    <Container fluid className='BgFooterHeader'>
      <Container>
        <Row>
          <Navbar expand="lg" className='navbar-dark '>
            <Navbar.Brand className='navBarBrandLogo'>
              <Link to={"/"}><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Movies on The Tip</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="main-links" className='justify-content-end'>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Movie"
                  className="me-3"
                  aria-label="Search"
                />
              </Form> */}
              <Nav>
                {
                  loading && (
                    <>
                      <span style={{ color: 'white' }}>Please Wait menu is loading </span>
                    </>
                  )
                }
                {
                  !loading && error && (
                    <>
                       <span style={{ color: 'white' }}>No Menu Item Found or Something gone wrong </span></>
                  )
                }
                {!loading && !error &&
                  <>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    {menu.map((item,idx) => (
                      <Nav.Link to={`/${item}`} as={NavLink} key={idx} style={{ textTransform: 'capitalize' }}>{item.replace(/-/g, " ")}</Nav.Link>
                    ))}
                  </>
                }

                {/* <Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in theatres</Nav.Link>
                <Nav.Link to="/movies-coming" as={NavLink}>Coming soon</Nav.Link>
                <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
                <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated movies</Nav.Link>
                <Nav.Link to="/favourite" as={NavLink}>Favourites</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </Container>
  )
}

export default NavigationMenu