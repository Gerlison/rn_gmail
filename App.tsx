import * as React from 'react';
import { Provider } from 'react-redux';

import Router from '@navigation/index';

import ErrorBoundary from '@core/ErrorBoundary';
import ThemeProvider from '@core/ThemeProvider';

import store from '@store/index';

export default () => (
  <Provider store={store}>
    <ThemeProvider>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </ThemeProvider>
  </Provider>
);
