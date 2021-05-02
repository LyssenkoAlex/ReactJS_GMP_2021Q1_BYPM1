import React from 'react';
import Navigation from '../Navigation';
import Search from '../header/Search';

const Welcome = () => (
  <>
    <Search />
    <Navigation />
    <section>
      <h1>Start movie search</h1>
    </section>
  </>
);

export default Welcome;
