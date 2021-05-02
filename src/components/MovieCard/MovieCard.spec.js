import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './MovieCard';
import controlMovie from '../../redux/reducers/_test_/control_movie.json';
import store from '../../redux/store';

describe(`Test MovieCard `, () => {
  it('renders Welcome', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MovieCard movie={controlMovie} deleteMovie={() => {}} editMovie={() => {}} />{' '}
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
