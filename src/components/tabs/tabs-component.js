import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

function renderTabItem(props) {
  const URL = props.url.substring(0, props.url.lastIndexOf("/") + 1);
  return _.map(props.tabItems, item => {
    const linkURL = item.linkTo.substring(0, item.linkTo.lastIndexOf("/") + 1);
    const returnActive = (URL === linkURL) ? ' is-active' : '';
    return (
      <li className={`tab-item${returnActive}`} key={item.name}>
        <Link to={item.linkTo}>{item.name}</Link>
      </li>
    );
  });
}

export default (props) => {
  return (
    <div className="tabs is-centered">
      <ul>
        {renderTabItem(props)}
      </ul>
    </div>
  );
}
