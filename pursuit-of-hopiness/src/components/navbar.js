import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

// WILL NEED UPDATED TO TRACK STATE--
// IF USER IS LOGGED IN, LOGIN/SIGNUP ARE REPLACED WITH LOGOUT

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Pursuit of Hoppiness</Link>
        </li>
      </ul>
      <ul className='userState'>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
