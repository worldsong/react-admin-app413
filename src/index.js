import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import BasicForm from './components/forms/BasicForm';
import Page from './components/Page'
import WrappedForm from './components/forms/WrappedForm'

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path={'/' } components={Page}>
          <IndexRedirect to="/app/form" />
          <Route path={'app'} component={App}>
              <Route path={'form'} components={BasicForm}></Route>
              <Route path={'wrappedform'} components={WrappedForm}></Route>
          </Route>
      </Route>
  </Router>,
  document.getElementById('root')
);
