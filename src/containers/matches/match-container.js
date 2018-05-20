import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { getSingleMatch } from '../../actions/matches';
import Loader from '../../components/loader/loader-component';

class Match extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleMatch(id);
  }

  renderCharacterIcons(comic) {
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

  grabCharacterIcons(comics) {
    return _.map(comics, comic => {
      return this.renderCharacterIcons(comic);
    });
  }

  render() {
    const { singleMatch } = this.props;
    let title;
    let subtitle;

    if (singleMatch && singleMatch.title) {
      title = <h3 className="title is-5">{singleMatch.title}</h3>;
      subtitle = <h4 className="subtitle is-6">{singleMatch.auto_title}</h4>;
    } else if (singleMatch && singleMatch.auto_title) {
      title = <h3 className="title is-5">{singleMatch.auto_title}</h3>;
    } else {
      title = <h3 className="title is-5">No title</h3>
    }

    if (!singleMatch) {
      return <Loader />;
    }
    return (
      <article className="hero is-fullheight">
        <div class="hero-body">
          <div className="container">
            <div className="media">
              {this.grabCharacterIcons(singleMatch.comics)}
            </div>
            <div class="content">
              {title}
              {subtitle}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps({ matches }, ownProps) {
  return { singleMatch: matches[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getSingleMatch })(Match);
