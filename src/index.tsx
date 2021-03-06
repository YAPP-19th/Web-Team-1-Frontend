import React from 'react';
import ReactDOM from 'react-dom';
import store from '@src/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Loading } from './components/atoms';
import './index.scss';
import './normalize.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={Loading} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
