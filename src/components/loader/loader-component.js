import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <section class="hero is-dark is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title ">Loading...</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Loader;
