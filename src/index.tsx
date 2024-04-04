import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import getGlobalStyles from '@/assets';
import { CustomThemeProvider } from '@/components';
import { MoviesPage } from '@/pages';
import { store } from '@/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const GlobalStyles = getGlobalStyles();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <GlobalStyles />
        <MoviesPage />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
);
