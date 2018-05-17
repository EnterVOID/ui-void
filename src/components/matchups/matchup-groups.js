import _ from 'lodash';
import React, { Component } from 'react';

import './matchup-groups.css';

class MatchupGroups extends Component {
  renderComicBlockHeader(title) {
    return (
      <header className="matchup-block-header">
        <h1 className="title is-5 is-spaced">{title}</h1>
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

  renderMatchupGroups(matches) {
    return _.map(matches, matchupBlock => {
      if (matchupBlock.results) {
        return (
          <section className="matchup-block" key={matchupBlock.title}>
            {this.renderComicBlockHeader(matchupBlock.title)}
            <div className="columns is-multiline">
              {this.renderMatchup(matchupBlock.results)}
            </div>
          </section>
        );
      }
    });
  }

  render() {
    return this.renderMatchupGroups(this.props.matches);
  }
}

export default MatchupGroups;
