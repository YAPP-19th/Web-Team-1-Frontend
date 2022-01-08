import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@src/store';
import '@src/index.scss';
import '@src/normalize.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Suspense fallback={null}>
        <Router>
          <Story />
        </Router>
      </Suspense>
    </Provider>
  ),
];
