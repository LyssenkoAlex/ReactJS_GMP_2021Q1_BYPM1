import React from 'react';
import './sass/style.scss';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
