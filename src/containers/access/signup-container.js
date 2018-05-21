import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="column is-6 is-offset-3">
              <section className="box access">
                <h1 className="title is-4 has-text-centered">
                  Connect to EnterVoid
                </h1>
                <form>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <input
                      className="is-checkradio is-small"
                      id="agree-terms"
                      type="checkbox"
                      name="agree-terms"
                    />
                    <label htmlFor="agree-terms">
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <div className="field">
                    <input
                      className="is-checkradio is-small"
                      id="agree-notifications"
                      type="checkbox"
                      name="agree-notifications"
                    />
                    <label htmlFor="agree-notifications">
                      I would like to receive notifications
                    </label>
                  </div>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <Link to="/signin" className="button is-text">
                        Already have an account?
                      </Link>
                    </div>
                    <div className="control">
                      <button className="button is-primary">Signup</button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup
