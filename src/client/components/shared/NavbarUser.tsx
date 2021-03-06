import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 sticky-top">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active ml-3">
                Home <span className="sr-only">(current)</span>
              </li>
            </Link>
            <Link to="/donate">
              <li className="nav-item active ml-3">
                Donate <span className="sr-only">(current)</span>
              </li>
            </Link>
          </ul>
          <button className="btn btn-link my-2 my-sm-0" onClick={handleLogout}>
            Logout
          </button>
          <Link to="/add">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Write a Blog
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
