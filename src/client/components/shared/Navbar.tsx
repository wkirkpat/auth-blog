import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active ml-3">
                Home <span className="sr-only">(current)</span>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item active ml-3">
                Login <span className="sr-only">(current)</span>
              </li>
            </Link>
            <Link to="/donate">
              <li className="nav-item active ml-3">
                Donate <span className="sr-only">(current)</span>
              </li>
            </Link>
          </ul>
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