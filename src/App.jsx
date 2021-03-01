import React from 'react';
import './sass/style.scss';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// eslint-disable-next-line import/no-named-as-default
import ErrorBoundary from './components/error/ErrorBoundary';

const App = () => (
  <>
    <Header button_search="SEARCH" button_add="+ ADD MOVIE" />
    <Navigation />
    <Main />
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </>
);

export default App;
