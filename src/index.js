import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path={'app'} component={App}>
      </Route>
  </Router>,
  document.getElementById('root')
);
