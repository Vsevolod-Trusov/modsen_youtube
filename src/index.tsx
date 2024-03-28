import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import getGlobalStyles, { DEFAULT_THEME } from '@/assets';
import { MoviesPage } from '@/pages';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const GlobalStyles = getGlobalStyles();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyles />
      <MoviesPage />
    </ThemeProvider>
  </React.StrictMode>,
);
