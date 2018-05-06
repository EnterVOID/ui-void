import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildCurrentLineUp } from '../../actions/matches';

import './matchup-block.css';


class Home extends Component {

  componentDidMount() {
    this.props.buildCurrentLineUp();
  }

  renderComicBlockHeader(title) {
    return (
      <header className="matchup-block-header container">
        <h1 className="title is-spaced">{title}</h1>
      </header>
    );
  }

  renderMatchup(matches) {
    return _.map(matches, vMatch => {
      let title;
      let subtitle;

      if (vMatch.title) {
        title = <h3 className="title is-5">{vMatch.title}</h3>;
        subtitle = <h4 className="subtitle is-6">{vMatch.auto_title}</h4>;
      } else {
        title = <h3 className="title is-5">{vMatch.auto_title}</h3>;
      }

      return (
        <div className="column is-full" key={vMatch.id}>
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

  renderComicBlock(matches) {
    return _.map(matches, matchupBlock => {
      console.log(matchupBlock);
      if (matchupBlock.results) {
        return (
          <section className="matchup-block" key={matchupBlock.title}>
            <div className="section">
              {this.renderComicBlockHeader(matchupBlock.title)}
              <div className="container">
                <div className="columns is-multiline">
                  {this.renderMatchup(matchupBlock.results)}
                </div>
              </div>
            </div>
          </section>
        );
      }
    });
  }

  render() {
    const { matches } = this.props;

    if (!matches) {
      return (<div>Loading...</div>);
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
                My first website with <strong>Bulma</strong>!
              </h2>
            </div>
          </div>
        </section>
        {this.renderComicBlock(matches)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { matches: state.matches };
}

export default connect(mapStateToProps, { buildCurrentLineUp })(Home);
