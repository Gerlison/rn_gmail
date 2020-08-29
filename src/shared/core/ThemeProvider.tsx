import React from 'react';

import StyledComponentsProvider from '@services/styledComponents';
import { useSelector } from 'react-redux';

import { RootState } from '@store/index';
import fonts from '@styles/fonts';
import metrics from '@styles/metrics';

const ThemeProvider: React.FC = ({ children }) => {
  const {
    theme: { currentTheme, theme },
  } = useSelector((state: RootState) => state);

  return (
    <StyledComponentsProvider
      theme={{ fonts, metrics, colors: theme, currentTheme }}
    >
      {children}
    </StyledComponentsProvider>
  );
};

export default ThemeProvider;
