import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildCurrentLineUp } from '../../actions/matches';
import Tabs from '../../components/tabs/tabs-component';
import Loader from '../../components/loader/loader-component';
import MatchupGroups from '../../components/matchups/matchup-groups';

class CurrentMatches extends Component {
  componentDidMount() {
    this.props.buildCurrentLineUp();
  }

  tabItems() {
    return [
      {
        name: 'Current',
        linkTo: '/comics/'
      },
      {
        name: 'All',
        linkTo: '/comics/archive/'
      }
    ];
  }

  render() {
    const { matches } = this.props;

    if (!matches) {
      return <Loader />;
    }

    return (
      <div>
        <section className="hero is-primary is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hello World</h1>
              <h2 className="subtitle">
                My first website with <strong>Bulma</strong>!
              </h2>
            </div>
          </div>
        </section>
        <article className="section">
          <div className="container">
            <Tabs tabItems={this.tabItems()} url={this.props.match.url} />
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

export default connect(mapStateToProps, { buildCurrentLineUp })(CurrentMatches);
