/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import SearchResult from '../../../components/SearchResult';
import store from '../../store';
import controlMovie from './control_movie.json';
import MovieCard from '../../../components/MovieCard/MovieCard';

const renderWithRedux = (component) => render(<Provider store={store}>{component}</Provider>);
const withRouter = (component, route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return <Router history={history}>{component}</Router>;
};

describe('test movies display', () => {
  it('check default search page', async () => {
    const { findAllByRole } = renderWithRedux(withRouter(<SearchResult />));
    const movies = await findAllByRole('img');
    expect(movies).toHaveLength(21);
  });

  it('test single movie rendered', async () => {
    const { getByAltText } = renderWithRedux(
      withRouter(<MovieCard movie={controlMovie} deleteMovie={() => {}} editMovie={() => {}} />),
    );
    const poster = await getByAltText(/Fifty Shades Freed/i);
    expect(poster).toBeInTheDocument();
  });


});
