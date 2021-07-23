import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar d-flex">
        <div className="logo ">
          <i class="fa fa-map"></i>
        </div>
        <div className="menu">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/create">
            Create new blog
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
