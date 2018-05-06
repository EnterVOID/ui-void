import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app-container.js';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const target = document.querySelector('#root');
const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
