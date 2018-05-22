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

  renderOneThumbnailSet(comic) {
    return _.map(comic.pages, page => {
      return (
        <div key={`page-${page.page_number}`} className="column is-one-fifth">
          <figure className="image is-2by3">
            <img src="http://via.placeholder.com/150x100" alt={`thumbnail for page ${page.page_number}`} />
          </figure>
        </div>
      );
    });
  }

  formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        //joins all with "and" but no commas
        //example: "bob and sam"
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
  }

  grabCharacterNames(characters) {
    let characterResults = [];
    for (var i in characters) {
      characterResults.push(characters[i].name);
    }
    return this.formatArray(characterResults);
  }

  grabMatchThumbnails(comics) {
    return _.map(comics, comic => {
      const characterNames = this.grabCharacterNames(comic.characters);
      return (
        <section key={comic.id} className="box comic-thumbnail-block">
          <div className="media">
            <h2 className="title">{characterNames}</h2>
          </div>
          <div className="columns is-multiline is-centered">
            {this.renderOneThumbnailSet(comic)}
          </div>
        </section>
      );
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
        <div className="hero-body">
          <div className="container">
            <div className="media">
              {this.grabCharacterIcons(singleMatch.comics)}
            </div>
            <div className="content">
              {title}
              {subtitle}
            </div>
            {this.grabMatchThumbnails(singleMatch.comics)}
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
