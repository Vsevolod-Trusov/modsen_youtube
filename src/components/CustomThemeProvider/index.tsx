import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { BLACK_THEME, DEFAULT_THEME } from '@/assets';
import { useTypedSelector } from '@/hooks';
import { getCurrentThemeValue } from '@/store/slices';

const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const currentTheme = useTypedSelector(getCurrentThemeValue);

  return (
    <ThemeProvider theme={currentTheme ? BLACK_THEME : DEFAULT_THEME}>
      {children}
    </ThemeProvider>
  );
};
export { CustomThemeProvider };
