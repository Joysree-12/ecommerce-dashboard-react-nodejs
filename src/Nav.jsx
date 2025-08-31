import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <header>
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
    </header>
    </>
  );
};

export default Nav;
