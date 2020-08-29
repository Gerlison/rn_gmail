import React from 'react';

import StyledComponentsProvider from '@services/styledComponents';

import { useTypedSelector } from '@store/index';

import fonts from '@styles/fonts';
import metrics from '@styles/metrics';

const ThemeProvider: React.FC = ({ children }) => {
  const { theme, currentTheme } = useTypedSelector(({ theme }) => theme);

  return (
    <StyledComponentsProvider
      theme={{ fonts, metrics, colors: theme, currentTheme }}
    >
      {children}
    </StyledComponentsProvider>
  );
};

export default ThemeProvider;
