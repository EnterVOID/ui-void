import React, { Component } from 'react';
//import { push } from 'react-router-redux';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';


class About extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                It's ME
              </h1>
              <h2 className="subtitle">
                WOW <strong>omg</strong>!
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="bd-notification is-info">First column</p>
              </div>
              <div className="column">
                <p className="bd-notification is-info">Second column</p>
              </div>
              <div className="column">
                <p className="bd-notification is-info">Third column</p>
              </div>
              <div className="column">
                <p className="bd-notification is-info">Fourth column</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
