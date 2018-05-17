import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title ">Loading...</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Loader;
