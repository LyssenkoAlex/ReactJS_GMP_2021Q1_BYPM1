import React, { useState } from 'react';
import './sass/style.scss';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// eslint-disable-next-line import/no-named-as-default
import ErrorBoundary from './components/error/ErrorBoundary';

const App = () => {
  const [movieDetails, setMovieDetails] = useState(false);

  const movieHandler = (movie) => {
    setMovieDetails(movie);
  };

  return (
    <>
      <Header moviedetails={movieDetails} />
      <Navigation />
      <Main setMovieDetails={movieHandler} />
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
