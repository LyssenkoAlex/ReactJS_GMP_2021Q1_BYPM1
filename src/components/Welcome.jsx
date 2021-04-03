import React from "react";
import Main from "./Main";
import Navigation from "./Navigation";
// eslint-disable-next-line import/no-named-as-default
import Search from "./header/Search";

const Welcome = () => (
  <>
    <Search />
    <Navigation />
    <Main />
  </>
);

export default Welcome;
