import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/pagination-component';
import FilterBar from '../../components/filter-bar/filter-bar-component';
import Tabs from '../../components/tabs/tabs-component';
import Loader from '../../components/loader/loader-component';
import MatchupItem from '../../components/matchups/matchup-item-component';
import { getMatches } from '../../actions/matches';

class MatchArchive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'list'
    };
  }

  componentDidMount() {
    const { page } = this.props.match.params;
    this.loadMatches(page);
  }

  loadMatches(page = 1) {
    this.props.getMatches(page);
  }

  renderMatches() {
    return _.map(this.props.matches.list, singleMatch => {
      return (
        <MatchupItem key={singleMatch.id} singleMatch={singleMatch} display={this.state.display} />
      );
    });
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
    const { list, total } = this.props.matches;
    const { page } = this.props.match.params;
    const current = Number(page || 1);
    const display = type => {
      this.setState({ display: type });
    };

    if (!list && !total) {
      return <Loader />;
    }

    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Comics</h1>
              <h2 className="subtitle">
                Look at these <strong>Comics</strong>!
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Tabs tabItems={this.tabItems()} url={this.props.match.url} />
            <Pagination url="comics/archive" total={total} current={current} />
            <FilterBar
              title="Matches"
              total={total}
              display={this.state.display}
              onDisplayChange={display}
            />
            <div className="columns is-multiline">
              {this.renderMatches(display)}
            </div>
            <Pagination url="comics/archive" total={total} current={current} />
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { matches: state.matches };
}

export default connect(mapStateToProps, { getMatches })(MatchArchive);
