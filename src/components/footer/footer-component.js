import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../containers/app/voidlogo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container has-text-centered">
          <nav className="level">
            <p className="level-item has-text-centered">
              <Link to="/" className="link has-text-light">Home</Link>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/about" className="link has-text-light">About</Link>
            </p>
            <p className="logo level-item has-text-centered">
              <img src={logo} alt="VOID got swag" />
            </p>
            <p className="level-item has-text-centered">
              <Link to="/comics" className="link has-text-light">Comics</Link>
            </p>
            <p className="level-item has-text-centered">
              <Link to="/characters" className="link has-text-light">Characters</Link>
            </p>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
