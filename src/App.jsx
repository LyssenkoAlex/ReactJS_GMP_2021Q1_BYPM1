import React from "react";
import "./sass/style.scss";
import { Route, Switch } from "react-router";
import { MOVIE_DETAILS_PAGE, SEARCH_PAGE, WELCOME_PAGE } from "./components/utils/ROUTES";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/error/ErrorBoundary";

const App = () => (
  <>
    <Switch>
      <Route exact path={WELCOME_PAGE.path} component={WELCOME_PAGE.component} />
      <Route path={SEARCH_PAGE.path} component={SEARCH_PAGE.component} />
      <Route path={`${MOVIE_DETAILS_PAGE.path}/:id`} component={MOVIE_DETAILS_PAGE.component} />
    </Switch>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </>

);

export default App;
