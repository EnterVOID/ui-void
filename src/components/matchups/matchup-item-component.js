import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

import './match-item.css';

/*function loopThroughCharacters(comic) {
  let results = 0;
  _.map(comic.characters, character => {
    results++;
  });
  return results;
}

function countCharactersInvolved(comics) {
  let characters = 0;
  for (let i in comics) {
    characters += loopThroughCharacters(comics[i]);
  }
  return characters;
}*/

function renderMatchClasses(comics, display) {
  if (display === 'list') {
    return `column is-full`;
  }
  return `column is-half`;
}

function renderCharacterIcons(comic) {
  const url = 'https://s3.us-east-2.amazonaws.com/void-storage';
  return _.map(comic.characters, character => {
    return (
      <div key={character.icon.path} className="media-left">
        <figure className="image is-48x48">
          <img src={`${url}/${character.icon.path}/${character.icon.filename}`} alt={`thumbnail for ${character.name}`} />
        </figure>
      </div>
    );
  });
}

function grabCharacterIcons(comics) {
  return _.map(comics, comic => {
    return renderCharacterIcons(comic);
  });
}

function matchTypeIcon(type) {
  if (type === 'Death Match') {
    return (
      <span className="icon">
        <i className="fas fa-skull"></i>
      </span>
    );
  } else if (type === 'Trophy Match') {
    return (
      <span className="icon">
        <i className="fas fa-trophy"></i>
      </span>
    );
  }
}

export default (props) => {
  let title;
  let subtitle;

  if (props.singleMatch.title) {
    title = <h3 className="title is-5">{props.singleMatch.title}</h3>;
    subtitle = <h4 className="subtitle is-6">{props.singleMatch.auto_title}</h4>;
  } else {
    title = <h3 className="title is-5">{props.singleMatch.auto_title}</h3>;
  }

  return (
    <div className={renderMatchClasses(props.singleMatch.comics, props.display)}>
      <article className="matchup card">
        <div className="card-content">
          <div className="media">
            {grabCharacterIcons(props.singleMatch.comics)}
          </div>
          <div className="content">
            {title}
            {subtitle}
            <div className="match-meta">
              <div className="match-meta-type">
                {matchTypeIcon(props.singleMatch.type.name)}
                {props.singleMatch.type.name}
              </div>
              <div className="match-meta-end">
                <strong>Ended</strong> on <Moment date={`${props.singleMatch.due_date}-0700`} format="MMMM Do, YYYY h:mma" />
              </div>
            </div>
          </div>
        </div>
        <Link className="matchup-bg-link" to={`/comic/${props.singleMatch.id}`} />
      </article>
    </div>
  );
}
