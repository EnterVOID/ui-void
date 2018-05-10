import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../containers/app/voidlogo.png';

class Navbar extends Component {
  render() {
    return (
      <header className="void-header">
        <nav className="navbar is-dark" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={logo} alt="Step into the Void" width="112" height="28" />
              </Link>
              <div className={`navbar-burger ${(this.props.open ? 'is-active' : '')}`} onClick={this.props.toggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`navbar-menu ${(this.props.open ? 'is-active' : '')}`}>
              <div className="navbar-end">
                <Link to="/"
                  className="navbar-item"
                  onClick={this.props.toggle}>
                  Home
                </Link>
                <Link to="/comics/"
                  className="navbar-item"
                  onClick={this.props.toggle}>
                  Comics
                </Link>
                <Link to="/characters/"
                  className="navbar-item"
                  onClick={this.props.toggle}>
                  Characters
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
