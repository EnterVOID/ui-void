import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/pagination-component';
import FilterBar from '../../components/filter-bar/filter-bar-component';
import Tabs from '../../components/tabs/tabs-component';
import { getMatches } from '../../actions/matches';


class MatchArchive extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'display': 'list'
    };
  }

  componentDidMount() {
    const { page } = this.props.match.params;
    this.loadMatches(page);
  }

  loadMatches(page = 1) {
    this.props.getMatches(page);
  }

  loopThroughCharacters(comic) {
    let results = 0;
    _.map(comic.characters, character => {
      results++
    });
    return results;
  }

  countCharactersInvolved(comics) {
    let characters = 0;
    for (let i in comics) {
      characters += this.loopThroughCharacters(comics[i]);
    }
    return characters;
  }

  renderMatchClasses(comics) {
    const characters = this.countCharactersInvolved(comics);

    if (this.state.display === 'list') {
      return `column is-full`;
    } else if (characters >= 4) {
      return `column is-half`;
    }
    return `column is-half`;
  }

  renderMatches() {
    return _.map(this.props.matches.list, vMatch => {
      let title;
      let subtitle;

      if (vMatch.title) {
        title = <h3 className="title is-5">{vMatch.title}</h3>;
        subtitle = <h4 className="subtitle is-6">{vMatch.auto_title}</h4>;
      } else {
        title = <h3 className="title is-5">{vMatch.auto_title}</h3>;
      }

      return (
        <div className={this.renderMatchClasses(vMatch.comics)} key={vMatch.id}>
          <article className="matchup card">
            <div className="card-content">
              <div className="content">
                {title}
                {subtitle}
              </div>
            </div>
          </article>
        </div>
      );
    });
  }

  tabItems() {
    return [
      {
        name: 'Current',
        linkTo: '/comics/',
      }, {
        name: 'All',
        linkTo: '/comics/archive/',
      }
    ];
  }

  render() {
    const { list, total } = this.props.matches;
    const { page } = this.props.match.params;
    const current = Number(page || 1);
    const display = (type) => { this.setState({ display: type }) };

    if (!list && !total) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Comics
              </h1>
              <h2 className="subtitle">
                Look at these <strong>Comics</strong>!
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Tabs tabItems={this.tabItems()} url={this.props.match.url} />
            <Pagination url="comics" total={total} current={current} />
            <FilterBar title="Matches" total={total} display={this.state.display} onDisplayChange={display} />
            <div className="columns is-multiline">
              {this.renderMatches(display)}
            </div>
            <Pagination url="comics" total={total} current={current} />
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
