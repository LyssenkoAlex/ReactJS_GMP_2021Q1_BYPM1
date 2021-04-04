import React from "react";
import { Link } from "react-router-dom";
import Logo from "./utils/Logo";

const NotFound = () => (
  <>
    <Logo />
    <section className="not_found">
      <h1>Page not found</h1>
      <h1>404</h1>
      <Link to="/">
        <button role="reset">
          Gp BACK TO HOME
        </button>
      </Link>
    </section>
  </>
);

export default NotFound;
