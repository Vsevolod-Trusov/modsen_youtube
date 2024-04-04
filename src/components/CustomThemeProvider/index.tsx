import React, { FC, PropsWithChildren } from 'react';

import { BLACK_THEME, DEFAULT_THEME } from '@/assets';
import { useTypedSelector } from '@/hooks';
import { getCurrentThemeValue } from '@/store/slices';

import { ThemeProvider } from 'styled-components';

const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useTypedSelector(getCurrentThemeValue);

  return (
    <ThemeProvider theme={currentTheme ? DEFAULT_THEME : BLACK_THEME}>
      {children}
    </ThemeProvider>
  );
};
export default CustomThemeProvider;
