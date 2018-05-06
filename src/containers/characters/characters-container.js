import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/pagination-component';
import FilterBar from '../../components/filter-bar/filter-bar-component';
import { getCharacters } from '../../actions/characters';


class Characters extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'display': 'grid'
    };
  }

  componentDidMount() {
    const { page } = this.props.match.params;
    this.loadCharacters(page);
  }

  loadCharacters(page = 1) {
    this.props.getCharacters(page);
  }

  renderCharacterClasses() {
    if (this.state.display === 'list') {
      return `column is-half`;
    }
    return `column is-one-fifth`;
  }

  renderCharacterCardGridItem(url, character) {
    return (
      <article className="card character">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={`${url}/${character.icon.path}/${character.icon.filename}`} alt={`thumbnail for ${character.name}`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-5">{character.name}</p>
            <p className="subtitle is-6">20-15</p>
            <p className="subtitle is-6">{character.status.name}</p>
          </div>
        </div>
      </article>
    );
  }

  renderCharacterCardListItem(url, character) {
    return (
      <article className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={`${url}/${character.icon.path}/${character.icon.filename}`} alt={`thumbnail for ${character.name}`} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{character.name}</p>
              <p className="subtitle is-6">20-15</p>
              <p className="subtitle is-6">{character.status.name}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  renderCharacterCard(character) {
    const url = 'https://s3.us-east-2.amazonaws.com/void-storage';
    if (this.state.display === 'grid') {
      return this.renderCharacterCardGridItem(url, character);
    }
    return this.renderCharacterCardListItem(url, character);
  }

  renderCharacters() {
    return _.map(this.props.characters.list, character => {

      return (
        <div className={this.renderCharacterClasses()} key={character.id}>
          {this.renderCharacterCard(character)}
        </div>
      );
    });
  }

  render() {
    const { list, total } = this.props.characters;
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
                Character
              </h1>
              <h2 className="subtitle">
                Hey, we got <strong>those</strong>, too!
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <FilterBar title="Characters" total={total} display={this.state.display} onDisplayChange={display}></FilterBar>
            <div className="columns is-multiline">
              {this.renderCharacters(display)}
            </div>
            <Pagination url="characters" total={total} current={current}></Pagination>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { characters: state.characters };
}

export default connect(mapStateToProps, { getCharacters })(Characters);
