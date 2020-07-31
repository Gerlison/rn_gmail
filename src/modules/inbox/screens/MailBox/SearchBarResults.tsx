import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';

import { Styled } from '@core/types';

interface Props {
  animation: Animated.Node<number>;
}

const SearchBarResults = ({ animation }: Props) => {
  return (
    <S.Container style={{ opacity: animation }}>
      <Text type="label">Recent mail searches</Text>
      <Text type="label">Suggested mail searches</Text>
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
