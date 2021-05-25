import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import configureStore from './src/redux/reducers/reducers';
import { Root } from './src/App';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${
            process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
          }
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const initialState = {
      data: [],
      total_amount: 0,
      post_movie_desc: '',
      post_movie_status: 0,
      error_body: '',
      genres: [],
      search_movie: '',
      selected_movie: {},
    };
    const store = configureStore(initialState);
    const preloadedState = store.getState();

    const root = <Root location={req.url} Router={StaticRouter} store={store} />;

    const htmlString = renderToString(root);

    res.send(renderHTML(htmlString, preloadedState));
  };
}
