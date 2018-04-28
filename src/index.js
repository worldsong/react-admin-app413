import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/lib/animate.css';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/index'
import CRouter from './routes/index';

const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
        <CRouter store={store} />
    </Provider>,
  document.getElementById('root')
);
registerServiceWorker();