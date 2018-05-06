import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {

  renderPaginationLink(pageNum) {
    const { current, url } = this.props;
    const isActive = current === pageNum ? ' is-current': '';
    return (
      <li key={`page-${pageNum}`}>
        <Link
          to={`/${url}/${pageNum}`}
          className={`pagination-link${isActive}`}
          aria-label="Goto page {pageNum}"
        >
          {pageNum}
        </Link>
      </li>
    );
  }

  renderPaginationNumbers(last) {
    const { current } = this.props;
    let pageNumbers = [];
    if (current === 1 || current === 2) {
      pageNumbers = [1, 2, 3, 4, 5, 'ellipsis-2', last];
    } else if (current === last || current === last - 1) {
      pageNumbers = [1, 'ellipsis-1', last - 4, last - 3, last - 2, last - 1, last];
    } else {
      pageNumbers = [1, 'ellipsis-1', current - 1, current, current + 1, 'ellipsis-2', last];
    }

    return _.map(pageNumbers, number => {
      let result;
      if (String(number).includes('ellipsis')) {
        result = <li key={number}><span className="pagination-ellipsis">&hellip;</span></li>;
      } else {
        result = this.renderPaginationLink(number);
      }

      return result;
    });
  }

  render() {
    const { current, url } = this.props;
    const lastPage = Number(Math.ceil(this.props.total/25));

    return (
      <nav className="pagination is-small" aria-label="pagination">
        <Link
          disabled={current === 1}
          to={`/${url}/${current - 1}`}
          className="pagination-previous"
        >
          Previous
        </Link>
        <Link
          disabled={current === lastPage}
          to={`/${url}/${current + 1}`}
          className="pagination-next"
        >
          Next page
        </Link>
        <ul className="pagination-list">
          {this.renderPaginationNumbers(lastPage)}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
