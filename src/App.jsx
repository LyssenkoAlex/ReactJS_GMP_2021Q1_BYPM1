import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/style.scss';
import { hot } from 'react-hot-loader';
import {
  GENRE_FILTER,
  MOVIE_DETAILS_PAGE,
  MOVIE_NOT_FOUND,
  SEARCH_PAGE,
  WELCOME_PAGE,
} from './components/utils/ROUTES';
import ErrorBoundary from './components/error/ErrorBoundary';
import NotFound from './components/NotFound';
import Welcome from './components/welcome/Welcome';
import SearchResult from './components/SearchResult';
import MovieDetails from './components/MovieDetails';
import MovieNotFound from './components/MovieNotFound';
import { Provider } from 'react-redux';

const App = () => (
  <Switch>
    <Route exact path={WELCOME_PAGE.path} component={Welcome} />
    <Route path={MOVIE_NOT_FOUND.path} component={MovieNotFound} />
    <Route path={GENRE_FILTER.path} component={SearchResult} />

    <Route path={`${SEARCH_PAGE.path}/:query`} component={SearchResult} />
    <Route path={`${MOVIE_DETAILS_PAGE.path}/:id`} component={MovieDetails} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
);

export const Root = hot(module)(({ Router, location, store }) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location}>
        <App />
      </Router>
    </ErrorBoundary>
  </Provider>
));
