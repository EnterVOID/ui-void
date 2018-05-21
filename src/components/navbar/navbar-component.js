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
              <div className="navbar-start">
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
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <div className="control">
                      <Link to="/signin" className="button is-primary">
                        Signin
                      </Link>
                    </div>
                    <div className="control">
                      <Link to="/signup" className="button is-primary is-outlined is-inverted">
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link to="/" className="navbar-link">
                    Account
                  </Link>

                  <div className="navbar-dropdown">
                    <Link to="/" className="navbar-item">
                      Overview
                    </Link>
                    <Link to="/" className="navbar-item">
                      Elements
                    </Link>
                    <Link to="/" className="navbar-item">
                      Components
                    </Link>
                    <hr className="navbar-divider" />
                    <div className="navbar-item">
                      Version 0.7.1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
