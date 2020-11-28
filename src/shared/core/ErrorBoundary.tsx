import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import Text from '@core/Text';

interface State {
  hasError: boolean;
  error: null | Error;
}

class ErrorBoundary extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <SafeAreaView />
          <StyledStatusBar />
          <StyledScrollView>
            <Text size="LARGER" color="DANGER">
              Algo de errado não está certo!
            </Text>
            <Text>{error?.toString()}</Text>
          </StyledScrollView>
        </>
      );
    }

    return (
      <>
        <StyledStatusBar />
        {children}
      </>
    );
  }
}

const StyledScrollView = styled.ScrollView.attrs(({ theme: { metrics } }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: metrics.MEDIUM,
  },
}))``;

const StyledStatusBar = styled.StatusBar.attrs(({ theme: { colors } }) => ({
  backgroundColor: colors.BACKGROUND,
  barStyle: 'dark-content',
}))``;

export default ErrorBoundary;
