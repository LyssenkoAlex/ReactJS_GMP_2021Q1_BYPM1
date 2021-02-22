import React from "react";
import "./sass/style.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/error/ErrorBoundary";

const App = () => (
  <React.Fragment>
    <Header />
    <Navigation />
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
    <Footer />
  </React.Fragment>
);

export default App;
