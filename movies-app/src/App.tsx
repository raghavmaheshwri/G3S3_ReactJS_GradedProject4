import React from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import MoviesDetails from './component/movies/MoviesDetails';
import NavigationMenu from './component/header-footer/NavigationMenu';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import '../src/css/app.css';
import SetFooter from './component/header-footer/footer';
import ErrorSection from './component/common/errorSection/ErrorSection';


function App() {
  return (
    <>
      <NavigationMenu />
      <Container className='my-3'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:movietype" element={<MovieDetailsPage />} />
          <Route path="/:movietype/:id" element={<MoviesDetails></MoviesDetails>} />
          <Route path="/*" element= {<ErrorSection/>}/>
        </Routes>
      </Container>
      <SetFooter/>
    </>
  );
}

export default App;
