import _ from 'lodash';
import React, { Component } from 'react';
import MatchupItem from './matchup-item-component';

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
    return _.map(matches, singleMatch => {
      return (
        <MatchupItem key={singleMatch.id} singleMatch={singleMatch} display="list" />
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
