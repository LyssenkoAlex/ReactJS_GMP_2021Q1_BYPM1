import React from 'react';
import { Route, Switch } from 'react-router';
import './sass/style.scss';
import {
  GENRE_FILTER,
  MOVIE_DETAILS_PAGE,
  MOVIE_NOT_FOUND,
  SEARCH_PAGE,
  WELCOME_PAGE,
} from './components/utils/ROUTES';
import Footer from './components/Footer';
import ErrorBoundary from './components/error/ErrorBoundary';
import NotFound from './components/NotFound';
import Welcome from './components/welcome/Welcome';
import SearchResult from './components/SearchResult';
import MovieDetails from './components/MovieDetails';
import MovieNotFound from './components/MovieNotFound';

const App = () => (
  <>
    <Switch>
      <Route exact path={WELCOME_PAGE.path} component={Welcome} />
      <Route path={MOVIE_NOT_FOUND.path} component={MovieNotFound} />
      <Route path={GENRE_FILTER.path} component={SearchResult} />
      <Route path={`${SEARCH_PAGE.path}/:query`} component={SearchResult} />
      <Route path={`${MOVIE_DETAILS_PAGE.path}/:id`} component={MovieDetails} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </>
);

export default App;
