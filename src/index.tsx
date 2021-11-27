import React from 'react';
import ReactDOM from 'react-dom';
import store from '@src/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import './normalize.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
