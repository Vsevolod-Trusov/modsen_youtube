import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import getGlobalStyles, { DEFAULT_THEME } from '@/assets';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const GlobalStyles = getGlobalStyles();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
