import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import Welcome from './Welcome';
import store from '../../redux/store';

describe(`Test Welcome `, () => {
  it('renders Welcome', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Welcome />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
