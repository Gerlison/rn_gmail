import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';

import { Styled } from '@core/types';

interface Props {
  focused: boolean;
  animation: Animated.Node<number>;
}

const SearchBarResults = ({ animation, focused }: Props) => {
  return (
    <S.Container
      style={{
        opacity: animation,
      }}
    >
      <Text type="label">Recent mail searches</Text>
      {/* #TODO while is not @focused, does not render any results  */}
    </S.Container>
  );
};

const S = {
  Container: styled(Animated.View)<Styled>`
    width: 100%;
    padding: ${spacing.SMALL}px;
    border-top-width: 1px;
    border-color: ${({ theme }) => theme.LIGHT};
    background-color: ${({ theme }) => theme.BACKGROUND};
  `,
};

export default SearchBarResults;
