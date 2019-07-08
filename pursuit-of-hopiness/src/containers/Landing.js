import React from "react";
import "../style/landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <header className="landing">
        <h1>Welcome to Pursuit of Hoppiness!</h1>
        <Link to="/breweries" className="btn btn-lg btn-info">
          I am 21+
        </Link>
      </header>
      <ul className="slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </>
  );
}
