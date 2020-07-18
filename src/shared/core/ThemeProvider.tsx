import React from 'react';

import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '@store/index';

interface Props {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: Props) => {
  const {
    theme: { currentTheme, theme },
  } = useSelector((state: RootState) => state);

  return (
    <StyledComponentsProvider theme={{ ...theme, currentTheme }}>
      {React.cloneElement(React.Children.only(children))}
    </StyledComponentsProvider>
  );
};

export default ThemeProvider;
