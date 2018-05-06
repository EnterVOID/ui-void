import React, { Component } from 'react';
import './filter-bar.css';

class FilterBar extends Component {

  onClickChangeDisplay(type) {
    if (type !== this.props.display) {
      this.props.onDisplayChange(type);
    }
  }

  render() {
    return (
      <div className="filter-bar level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>{this.props.total}</strong> {this.props.title}
            </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <span
              onClick={() => this.onClickChangeDisplay('list')}
              className={`icon${this.props.display === 'list' ? ' is-active' : ''}`}
            >
              <i className="fas fa-th-list"></i>
            </span>
          </div>
          <div className="level-item">
            <span
              onClick={() => this.onClickChangeDisplay('grid')}
              className={`icon${this.props.display === 'grid' ? ' is-active' : ''}`}
            >
              <i className="fas fa-th"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
