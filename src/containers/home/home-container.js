//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildCurrentLineUp } from '../../actions/matches';
import Loader from '../../components/loader/loader-component';
import MatchupGroups from '../../components/matchups/matchup-groups-component';

class Home extends Component {

  componentDidMount() {
    this.props.buildCurrentLineUp();
  }

  render() {
    const { matches } = this.props;

    if (!matches) {
      return (<Loader />);
    }

    return (
      <div>
        <section className="hero is-primary is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hello World
              </h1>
              <h2 className="subtitle">
                Step into the <strong>Void</strong>!
              </h2>
            </div>
          </div>
        </section>
        <article className="section">
          <div className="container">
            <MatchupGroups matches={matches} />
          </div>
        </article>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { matches: state.matches };
}

export default connect(mapStateToProps, { buildCurrentLineUp })(Home);
