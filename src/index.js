import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import BasicForm from './components/forms/BasicForm';
import Page from './components/Page'
import WrappedForm from './components/forms/WrappedForm'
import BasicTable from './components/tables/BasicTables'
import AdvancedTable from './components/tables/AdvancedTables'

import AsynchronousTable from './components/tables/AsynchronousTable';
import Login from './components/pages/Login';

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path={'/' } components={Page}>
          <IndexRedirect to="/app/form/wrappedform" />
          <Route path={'app'} component={App}>
              <Route path={'form'}>
                  <Route path={'basicform'} components={BasicForm}></Route>
                  <Route path={'wrappedform'} components={WrappedForm}></Route>
              </Route>
              <Route path={'table'}>
                  <Route path={'basicTable'} component={BasicTable} />
                  <Route path={'advancedTable'} components={AdvancedTable} />
                  <Route path={'asynchronousTable'} components={AsynchronousTable} />

              </Route>
          </Route>
          <Route path={'login'} components={Login} />
      </Route>
  </Router>,
  document.getElementById('root')
);
